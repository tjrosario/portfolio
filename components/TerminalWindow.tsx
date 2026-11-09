import WindowFrame from "./WindowFrame";

interface TerminalWindowProps {
  label: string;
  command: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ label, command, children }: TerminalWindowProps) {
  return (
    <WindowFrame label={label}>
      <div className="terminal-body">
        <p aria-hidden="true" className="terminal-line"><span className="tok-keyword">$</span> {command}</p>
        {children}
        <p aria-hidden="true" className="terminal-line"><span className="tok-keyword">$</span><span className="editor-caret" /></p>
      </div>
    </WindowFrame>
  );
}
