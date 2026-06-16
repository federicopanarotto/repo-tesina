interface CodeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre
      style={{
        background: "#f5f5f5",
        padding: "14px",
        borderRadius: 8,
        fontSize: "0.7rem",
        lineHeight: 1.5,
        borderLeft: "3px solid var(--primary)",
      }}
    >
      {children}
    </pre>
  );
}
