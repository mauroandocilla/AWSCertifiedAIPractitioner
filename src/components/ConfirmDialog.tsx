import { useBodyScrollLock } from '../hooks/useBodyScrollLock.ts';

interface ConfirmDialogProps {
  open: boolean;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ open, message, confirmLabel = 'Reiniciar', onConfirm, onCancel }: ConfirmDialogProps) {
  useBodyScrollLock(open);
  if (!open) return null;
  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
        <p className="confirm-message">{message}</p>
        <div className="confirm-actions">
          <button type="button" className="quiz-btn" onClick={onCancel}>
            Cancelar
          </button>
          <button type="button" className="quiz-btn accent" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
