import Swal from 'sweetalert2';
import "./Alert.css";

export function Alert(title, text, confirmButtonText, cancelButtonText) {
  const SwalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "confirm-button",
      cancelButton: "cancel-button"
    },
    buttonsStyling: false
  });

  return SwalWithBootstrapButtons.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return SwalWithBootstrapButtons.fire({
        title: "Confirmado!",
        text: "Tu cita fue confirmada, Gracias por tu visita.",
        icon: "success"
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      return SwalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Puedes elegir otro servicio y horario. Gracias por tu visita :)",
        icon: "error"
      });
    }
  });
}
