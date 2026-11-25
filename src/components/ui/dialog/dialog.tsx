import { useEffect, type ReactNode } from "react";
import CloseIcon from "../../icons/close";
import "./dialog.css";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  closeAriaLabel?: string;
  className?: string;
  backdropClassName?: string;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
}

export default function Dialog({
  isOpen,
  onClose,
  children,
  ariaLabelledBy,
  ariaDescribedBy,
  closeAriaLabel = "Close dialog",
  className = "",
  backdropClassName = "",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEsc = true,
}: DialogProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEsc]);

  if (!isOpen) return null;

  return (
    <div
      className={`ui-dialog-backdrop ${backdropClassName}`.trim()}
      onClick={(e) => {
        if (closeOnBackdropClick && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`ui-dialog-container ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {showCloseButton && (
          <button
            type="button"
            className="ui-dialog-close"
            onClick={onClose}
            aria-label={closeAriaLabel}
          >
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
