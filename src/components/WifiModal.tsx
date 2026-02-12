import React, { useState, useMemo } from 'react';

interface WifiModalProps {
  isOpen: boolean;
  onClose: () => void;
  ssid: string;
  password: string;
}

const WifiModal: React.FC<WifiModalProps> = ({ isOpen, onClose, ssid, password }) => {
  const [copied, setCopied] = useState(false);

  const isAndroid = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    return /android/i.test(navigator.userAgent);
  }, []);

  if (!isOpen) return null;

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenWifiSettings = () => {
    // Android intent to open Wi-Fi settings
    window.location.href = 'intent:#Intent;action=android.settings.WIFI_SETTINGS;end';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm p-8 flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black text-white font-bold text-sm border-2 border-black hover:bg-white hover:text-black transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="w-16 h-16 bg-green-400 border-3 border-black rounded-full flex items-center justify-center mb-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
          </svg>
        </div>

        <h2 className="font-bold text-2xl text-black uppercase tracking-tight mb-1">Connect to Wi-Fi</h2>
        <p className="text-sm text-neutral-500 mb-6">Tap to copy, then connect in your settings 👇</p>

        {/* Network name */}
        <div className="w-full bg-neutral-100 border-2 border-black p-3 mb-4 text-left">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Network</p>
          <p className="font-bold text-black text-lg tracking-tight">{ssid}</p>
        </div>

        {/* Step 1: Copy password */}
        <button
          onClick={handleCopyPassword}
          className={`w-full py-4 px-6 border-4 border-black flex items-center justify-between font-bold text-lg uppercase tracking-tight shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all ${
            copied
              ? 'bg-green-400 text-black'
              : 'bg-yellow-400 text-black'
          }`}
        >
          <span>{copied ? '✓ Password Copied!' : 'Copy Password'}</span>
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>

        {/* Step 2: Open Wi-Fi Settings (Android only) */}
        {isAndroid && (
          <button
            onClick={handleOpenWifiSettings}
            className="w-full py-4 px-6 bg-black text-white border-4 border-black flex items-center justify-between font-bold text-lg uppercase tracking-tight shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all mt-3"
          >
            <span>Open Wi-Fi Settings</span>
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        )}

        <p className="text-xs text-neutral-400 mt-5 leading-relaxed">
          {isAndroid
            ? <>Paste the password and select <span className="font-bold text-neutral-600">"{ssid}"</span></>
            : <>Go to <span className="font-bold text-neutral-600">Settings → Wi-Fi</span>, select <span className="font-bold text-neutral-600">"{ssid}"</span> and paste the password</>
          }
        </p>
      </div>
    </div>
  );
};

export default WifiModal;
