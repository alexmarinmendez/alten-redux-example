import { createPortal } from "react-dom"
import "../assets/styles/components/Modal.scss"
import { ReactComponent as SVGClose } from "../assets/static/icons/close.svg"

const Modal = (props) => {
  props.isOpen
  ? createPortal(
    <div className="modal">
      <figure onClick={props.onClose} className="modal__close">
        <SVGClose className="modal__close-icon" />
      </figure>
    </div>
  )
  : null
}

export default Modal