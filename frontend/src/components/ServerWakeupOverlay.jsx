function ServerWakeupOverlay({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="server-wakeup-overlay" role="status" aria-live="polite">
      <div className="server-wakeup-backdrop" />

      <div className="server-wakeup-card">
        <div className="server-wakeup-orbit">
          <div className="server-wakeup-core">AI</div>
          <span className="orbit-dot orbit-dot-1" />
          <span className="orbit-dot orbit-dot-2" />
          <span className="orbit-dot orbit-dot-3" />
        </div>

        <p className="server-wakeup-eyebrow">
          <span className="status-pulse" />
          PREDICTION SERVICE
        </p>

        <h2>Waking up the AI server...</h2>

        <p className="server-wakeup-description">
          The prediction engine is starting up. This can take a little longer
          after a period of inactivity.
        </p>

        <div className="server-wakeup-progress">
          <span />
        </div>

        <div className="server-wakeup-status">
          <div className="wake-status-item">
            <span className="wake-status-icon">✓</span>
            <span>Frontend ready</span>
          </div>

          <div className="wake-status-item active">
            <span className="wake-status-spinner" />
            <span>Connecting to AI server</span>
          </div>

          <div className="wake-status-item">
            <span className="wake-status-icon">✦</span>
            <span>Random Forest inference</span>
          </div>
        </div>

        <p className="server-wakeup-footer">
          Your prediction will appear automatically once the server responds.
        </p>
      </div>
    </div>
  );
}

export default ServerWakeupOverlay;
