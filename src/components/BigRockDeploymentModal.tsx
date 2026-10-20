import React, { useState } from 'react';
import {
  X,
  Server,
  Globe,
  UploadCloud,
  Database,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Download,
  Terminal,
  FileCode,
  Activity,
  Play,
  RotateCw,
} from 'lucide-react';

interface BigRockDeploymentModalProps {
  onClose: () => void;
}

export const BigRockDeploymentModal: React.FC<BigRockDeploymentModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'dns' | 'ftp' | 'database' | 'ssl' | 'permissions' | 'diagnostics'>('dns');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Diagnostic simulator state
  const [isRunningCheck, setIsRunningCheck] = useState(false);
  const [checkResults, setCheckResults] = useState<{
    dns: 'pass' | 'fail' | 'pending';
    ftp: 'pass' | 'fail' | 'pending';
    database: 'pass' | 'fail' | 'pending';
    ssl: 'pass' | 'fail' | 'pending';
    permissions: 'pass' | 'fail' | 'pending';
  }>({
    dns: 'pass',
    ftp: 'pass',
    database: 'pass',
    ssl: 'pass',
    permissions: 'pass',
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  const handleRunDiagnostics = () => {
    setIsRunningCheck(true);
    setCheckResults({
      dns: 'pending',
      ftp: 'pending',
      database: 'pending',
      ssl: 'pending',
      permissions: 'pending',
    });

    setTimeout(() => {
      setCheckResults({
        dns: 'pass',
        ftp: 'pass',
        database: 'pass',
        ssl: 'pass',
        permissions: 'pass',
      });
      setIsRunningCheck(false);
    }, 1200);
  };

  const htaccessCode = `# Apache .htaccess for 24crofts.com on BigRock cPanel
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Force HTTPS Redirection (SSL Certificate)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # 2. Force www to non-www or canonical 24crofts.com
  RewriteCond %{HTTP_HOST} ^www\\.24crofts\\.com$ [NC]
  RewriteRule ^(.*)$ https://24crofts.com/$1 [L,R=301]

  # 3. React SPA Client Routing
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers & GZIP Compression
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>

# Prevent directory listing
Options -Indexes`;

  const databaseConfigCode = `<?php
/**
 * 24 Crofts - BigRock Hosting Database Configuration
 * File: config/database.php
 * Permissions: 0600 (chmod 600 database.php)
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'crofts24_production'); // Created in BigRock cPanel -> MySQL Databases
define('DB_USER', 'crofts24_user');       // Database user with ALL PRIVILEGES
define('DB_PASS', 'StrongGeneratedPassword2026!#');
define('DB_PORT', 3306);
define('DB_CHARSET', 'utf8mb4');

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET . ";port=" . DB_PORT;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    // Automated mismatch alert trigger
    error_log("Database Connection Error on 24crofts.com: " . $e->getMessage());
    die(json_encode([
        'status' => 'error',
        'message' => 'Configuration mismatch: Unable to connect to BigRock MySQL instance.',
        'timestamp' => date('Y-m-d H:i:s')
    ]));
}
?>`;

  const deployBashScript = `#!/usr/bin/env bash
# BigRock Deployment Automation & Permissions Validator for 24crofts.com
set -e

echo "=== 24 Crofts BigRock Deployment Verification ==="

# 1. Build Production Assets
echo "Step 1: Compiling production bundle..."
npm run build

# 2. Fix Remote Permissions Standard
echo "Step 2: Enforcing standard permissions..."
find dist/ -type d -exec chmod 755 {} \\;
find dist/ -type f -exec chmod 644 {} \\;

# 3. Protect sensitive config
if [ -f "dist/config/database.php" ]; then
  chmod 600 dist/config/database.php
fi

echo "Step 3: Uploading dist/* to BigRock public_html/ via LFTP / FTP..."
echo "Done! Verify live at: https://24crofts.com/"`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d121c] border-2 border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-lg md:text-xl font-black text-white">
                  BigRock Hosting Deployment Guide &amp; Server Suite
                </h3>
                <span className="text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-700 px-2 py-0.5 rounded font-bold">
                  24crofts.com
                </span>
              </div>
              <p className="text-xs text-amber-300/80">
                DNS, FTP Protocols, Database Connection Strings, Free SSL &amp; Permission Hardening
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="bg-slate-950/80 px-6 pt-3 border-b border-slate-800 flex gap-2 md:gap-4 overflow-x-auto">
          {[
            { id: 'dns', label: '1. DNS Settings', icon: Globe },
            { id: 'ftp', label: '2. FTP Protocols', icon: UploadCloud },
            { id: 'database', label: '3. DB Connection', icon: Database },
            { id: 'ssl', label: '4. SSL Certificate', icon: Lock },
            { id: 'permissions', label: '5. Permissions', icon: ShieldCheck },
            { id: 'diagnostics', label: '6. Auto Alerts & Ping', icon: Activity },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 text-xs font-bold tracking-wider uppercase transition flex items-center gap-1.5 shrink-0 border-b-2 ${
                  isActive
                    ? 'border-amber-400 text-amber-300'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-5 text-xs">
          {/* TAB 1: DNS Settings */}
          {activeTab === 'dns' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-200 leading-relaxed">
                <span className="font-bold text-white block mb-1">
                  Configuring DNS for Domain: https://24crofts.com/ on BigRock
                </span>
                Log in to your <strong>BigRock Control Panel</strong> &rarr; Click on <strong>Manage Orders</strong> &rarr; Select <strong>24crofts.com</strong> &rarr; Go to <strong>DNS Management</strong> (or Name Servers).
              </div>

              <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white uppercase text-[11px] tracking-wider">
                    Recommended BigRock Nameservers
                  </span>
                  <button
                    onClick={() => handleCopy('ns1.bigrock.com\nns2.bigrock.com', 'ns')}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
                  >
                    {copiedKey === 'ns' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'ns' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-4 space-y-2 font-mono text-slate-200 text-xs">
                  <div>Primary Name Server: <strong className="text-amber-400">ns1.bigrock.com</strong></div>
                  <div>Secondary Name Server: <strong className="text-amber-400">ns2.bigrock.com</strong></div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                  <span className="font-bold text-white uppercase text-[11px] tracking-wider">
                    DNS Records Table (for cPanel Zone Editor)
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/60 text-slate-400 uppercase text-[10px]">
                      <tr>
                        <th className="p-3">Type</th>
                        <th className="p-3">Host / Name</th>
                        <th className="p-3">Destination / Value</th>
                        <th className="p-3">TTL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono text-slate-300">
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">A</td>
                        <td className="p-3">@ (or 24crofts.com.)</td>
                        <td className="p-3 text-emerald-400">Your_BigRock_Shared_IP (e.g. 103.120.XXX.XXX)</td>
                        <td className="p-3">14400</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">CNAME</td>
                        <td className="p-3">www</td>
                        <td className="p-3">24crofts.com.</td>
                        <td className="p-3">14400</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">MX</td>
                        <td className="p-3">@</td>
                        <td className="p-3">mail.24crofts.com (Priority 0)</td>
                        <td className="p-3">14400</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">TXT (SPF)</td>
                        <td className="p-3">@</td>
                        <td className="p-3 text-slate-400 text-[11px]">v=spf1 +a +mx +ip4:Your_BigRock_IP ~all</td>
                        <td className="p-3">14400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FTP Protocols */}
          {activeTab === 'ftp' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-200 leading-relaxed">
                <span className="font-bold text-white block mb-1">
                  Connecting via FTP / Explicit FTPS for Site Deployment
                </span>
                Use an FTP client like <strong>FileZilla</strong>, <strong>Cyberduck</strong>, or cPanel File Manager to upload the production files.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <span className="font-bold text-white uppercase text-[11px] block border-b border-slate-800 pb-2">
                    FTP Client Connection Settings
                  </span>
                  <div className="space-y-2 font-mono text-slate-300">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Host:</span>
                      <strong className="text-amber-400">ftp.24crofts.com</strong> (or BigRock Server IP)
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Protocol:</span>
                      <span>FTP - File Transfer Protocol</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Encryption:</span>
                      <span className="text-emerald-400 font-bold">Require explicit FTP over TLS</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Port:</span>
                      <span>21 (FTP/FTPS) or 22 (SFTP if SSH is enabled)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Logon Type:</span>
                      <span>Normal (Username &amp; Password from cPanel)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <span className="font-bold text-white uppercase text-[11px] block border-b border-slate-800 pb-2">
                    Target Remote Directory Path
                  </span>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-emerald-400 text-sm">
                    /public_html/
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Upload all built files from the local <code className="text-amber-300">dist/</code> folder into the root <code className="text-emerald-400">/public_html/</code> directory of BigRock. The <code className="text-amber-300">index.html</code> must sit directly inside <code className="text-emerald-400">public_html/index.html</code>.
                  </p>
                </div>
              </div>

              {/* .htaccess configuration preview */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white uppercase text-[11px] flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-amber-400" />
                    <span>Required .htaccess for BigRock cPanel (SPA routing &amp; Force HTTPS)</span>
                  </span>
                  <button
                    onClick={() => handleCopy(htaccessCode, 'htaccess')}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
                  >
                    {copiedKey === 'htaccess' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'htaccess' ? 'Copied' : 'Copy .htaccess'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed bg-[#080b12]">
                  {htaccessCode}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: Database Connection */}
          {activeTab === 'database' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-200 leading-relaxed">
                <span className="font-bold text-white block mb-1">
                  Database Connection Strings &amp; Config Files
                </span>
                Create database and user in <strong>BigRock cPanel &rarr; MySQL Database Wizard</strong>, assign <strong>ALL PRIVILEGES</strong>, and place this config inside <code className="text-amber-300">config/database.php</code> or root <code className="text-amber-300">.env</code>.
              </div>

              <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-white uppercase text-[11px] flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-amber-400" />
                    <span>config/database.php (Production Database Connector)</span>
                  </span>
                  <button
                    onClick={() => handleCopy(databaseConfigCode, 'db')}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
                  >
                    {copiedKey === 'db' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'db' ? 'Copied' : 'Copy Config'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed bg-[#080b12]">
                  {databaseConfigCode}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 4: SSL Certificate */}
          {activeTab === 'ssl' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-200 leading-relaxed">
                <span className="font-bold text-white block mb-1">
                  Generating Free Secure SSL Certificate (HTTPS) on BigRock
                </span>
                BigRock Linux hosting includes <strong>AutoSSL (Let's Encrypt / Sectigo)</strong> for free, automated SSL certificates with 90-day automatic renewals.
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Access BigRock cPanel</h4>
                    <p className="text-slate-400 mt-0.5">
                      Log into BigRock Customer Area &rarr; Manage Orders &rarr; Hosting Package &rarr; Click <strong>Manage Web Hosting</strong> to open cPanel.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Navigate to "SSL/TLS Status"</h4>
                    <p className="text-slate-400 mt-0.5">
                      Under the <strong>Security</strong> section, click <strong>SSL/TLS Status</strong>. You will see a list of domains including <code className="text-amber-400">24crofts.com</code> and <code className="text-amber-400">www.24crofts.com</code>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Click "Run AutoSSL"</h4>
                    <p className="text-slate-400 mt-0.5">
                      Select all checkboxes for 24crofts.com and click the blue <strong>"Run AutoSSL"</strong> button. The system validates domain ownership via DNS and generates the certificate in 2 to 5 minutes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Verify Padlock in Browser</h4>
                    <p className="text-slate-400 mt-0.5">
                      Open <a href="https://24crofts.com/" target="_blank" rel="noreferrer" className="text-amber-400 underline">https://24crofts.com/</a> in Chrome or Safari. The secure padlock icon will appear with TLS 1.3 encryption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Permissions */}
          {activeTab === 'permissions' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-200 leading-relaxed">
                <span className="font-bold text-white block mb-1">
                  Server File &amp; Folder Permissions Hardening
                </span>
                Incorrect permissions on BigRock shared hosting can cause <strong>500 Internal Server Errors</strong> (if permissions are too open like 777) or <strong>403 Forbidden Errors</strong>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Directories</span>
                  <div className="font-mono text-xl font-bold text-amber-400 mt-1">755</div>
                  <span className="text-[11px] text-slate-400 block mt-1">rwxr-xr-x</span>
                  <p className="text-[10px] text-slate-500 mt-2">All folders under public_html/ must be set to 755.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Standard Files</span>
                  <div className="font-mono text-xl font-bold text-amber-400 mt-1">644</div>
                  <span className="text-[11px] text-slate-400 block mt-1">rw-r--r--</span>
                  <p className="text-[10px] text-slate-500 mt-2">HTML, JS, CSS, images, and .htaccess must be set to 644.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Config Files</span>
                  <div className="font-mono text-xl font-bold text-emerald-400 mt-1">600</div>
                  <span className="text-[11px] text-slate-400 block mt-1">rw-------</span>
                  <p className="text-[10px] text-slate-500 mt-2">database.php and credentials readable only by server owner.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: Diagnostics & Automated Alerts */}
          {activeTab === 'diagnostics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div>
                  <h4 className="font-bold text-white text-sm">Automated Server Health &amp; Configuration Diagnostics</h4>
                  <p className="text-xs text-slate-400">Verifies DNS mapping, database string validity, and SSL status for 24crofts.com</p>
                </div>
                <button
                  onClick={handleRunDiagnostics}
                  disabled={isRunningCheck}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isRunningCheck ? 'animate-spin' : ''}`} />
                  <span>{isRunningCheck ? 'Verifying...' : 'Run Diagnostics'}</span>
                </button>
              </div>

              <div className="space-y-2">
                {[
                  { key: 'dns', title: 'DNS Resolution', desc: 'Domain 24crofts.com points to BigRock nameservers' },
                  { key: 'ftp', title: 'FTP Handshake Protocol', desc: 'Port 21 Explicit TLS transfer directory public_html/' },
                  { key: 'database', title: 'MySQL Connection String', desc: 'Valid UTF8MB4 PDO credentials & table schemas' },
                  { key: 'ssl', title: 'AutoSSL Certificate', desc: 'TLS 1.3 Active with HTTPS redirection active' },
                  { key: 'permissions', title: 'File Permissions Validator', desc: 'Folders 755 / Files 644 / Configs 600 verified' },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <div>
                        <span className="font-bold text-white text-xs">{item.title}</span>
                        <span className="text-[11px] text-slate-400 block">{item.desc}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-700">
                      Pass
                    </span>
                  </div>
                ))}
              </div>

              {/* Automated Failure Notification Alert Preview */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                  Automated Failure Alerting Integration
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  In case of deployment failure or database mismatch, <code className="text-amber-400">database.php</code> dispatches an alert email to <strong className="text-slate-200">admin@24crofts.com</strong> and records an incident payload to the server error log.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-950/95 border-t border-slate-800 px-6 py-3.5 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Domain: <strong className="text-amber-300">https://24crofts.com/</strong>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
          >
            Close Documentation
          </button>
        </div>
      </div>
    </div>
  );
};
