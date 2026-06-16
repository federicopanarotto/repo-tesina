import SlideLayout from "../layout/SlideLayout";

export default function SlideFactory() {
  return (
    <SlideLayout icon="fa-industry" title="Pattern Factory per le API">
      <div className="grid-2">
        <div>
          <p style={{ fontSize: "1rem", marginBottom: 12 }}>
            <code
              style={{
                background: "#e8eaf6",
                padding: "2px 8px",
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              createPanelApiFactory
            </code>{" "}
            genera automaticamente 5 hook CRUD:
          </p>
          <ul className="bullet-list" style={{ gap: 8 }}>
            <li>
              <i className="fas fa-download"></i> <code>useGetList()</code> — GET /endpoint
            </li>
            <li>
              <i className="fas fa-circle-info"></i> <code>useGetDetail(id)</code> — GET /endpoint/:id
            </li>
            <li>
              <i className="fas fa-plus"></i> <code>usePost()</code> — POST /endpoint
            </li>
            <li>
              <i className="fas fa-pen"></i> <code>usePut()</code> — PUT /endpoint/:id
            </li>
            <li>
              <i className="fas fa-trash"></i> <code>useDelete()</code> — DELETE /endpoint/:id
            </li>
          </ul>
          <p style={{ marginTop: 16, fontSize: "0.9rem", color: "var(--text-light)" }}>
            <i className="fas fa-check-circle" style={{ color: "#2e7d32" }}></i>{" "}
            Cache automatica + invalidazione dopo mutazioni
          </p>
        </div>
        <div>
          <p style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 6 }}>
            Definizione in poche righe:
          </p>
          <pre
            style={{
              background: "#1a1a2e",
              color: "#e0e0e0",
              padding: 14,
              borderRadius: 8,
              fontSize: "0.75rem",
              lineHeight: 1.6,
            }}
          >
{`export const batchApi = createPanelApi<IBatch>({
  baseEndpoint: "/batch",
  queryKey: "BATCH"
});`}
          </pre>
          <p style={{ marginTop: 8, fontSize: "0.9rem", color: "var(--text-light)" }}>
            Ogni pannello = poche righe dichiarative.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
