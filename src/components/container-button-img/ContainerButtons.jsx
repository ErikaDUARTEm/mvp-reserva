import { Button } from "../Button";
import "./ContainerButtons.css"

export function ContainerButtons() {

  return (
    <>
      <div className="container-btns">
        <Button id="btn-reservar" >
          <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVR4nO2ZzWsTURTFn19Lq6Au/Vq4dBWtzb2tWRh7b0UsChX/m6hYUcG1BtN7G7uyCn78GWq7FXVpq3VV20SDUKm8MZO8EYUmnc7MK3NgNjkMnN+7570XGGNybVMx6n0GaTHKPeObJiZmdxHKT0ZdJ5QfxjeVsX7Ehg8AQL54NxlGuRsCMOhs+HupVNkdToZBmiZrqpjKTga93Qn/5xkK/TGonXLAPpgsqVCo7iHUp9Hw8iD0x4bkJKF+cvxHJkti0IeR8CBPLJT1RoeVGbTheM3yWTlhsiKCetENTyi3bJ2sZ4PawE51GlQUMlkSozzrnjp6x/UIdMoBW7BVMlkToy6FIUdH5PBf3sfQs5vYZFGE+r3d7Za9xFyv032Qlj1GTRbFqJPtoJO9eLm2rdjepsH/lciNmtwD0rIZ+oy/viNy6aQGoY3+JxBsPG8n0FVaACYu5QCYT2BzSvcUkiahzDPITR6eOuQfAHYfQllhnL7sLQAHEPqrZ4g0T6FLUNtLIOOM8s7xvl0sVQ96ARCqXKjucyEI5YbxCcDKVscBmDfeAQzODDh7YdU7gHJQo84EVrwDIJQrHR90ziuA8ZLuJ5D3ToWuewHAgzMDduUj4UGWz52uH8g8AP/nIrP3wobDZwmAQJZ7Dp82AKGuMshb2/meauOKQNZSWO21vsL+cwIgn5NfeVmIDYBAX6UwgeexAXBRryU/gemrcX8ymksuvL4OvyvEpvMjj48zytcEAJYuFGtHYw3vQhDqm61ceTqjx8xWKqhTsCfkJaMubuaIbb+7yKgvbOdjr02uXGbD+g2/ZnF5h71vnAAAAABJRU5ErkJggg=="} />
          <p>Reservar</p>
          
        </Button>
        {
          <Button id="btn-turnos">
            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAklEQVR4nOXYvWvVUBgG8OPnYMVFO1vQOvu1t7MgqCVo8jzn5n2jZHAXcfGCk9A6Fd1K69A/oGDB1qFVnJy6OVURdwUXoWKvnJADUcSm3puTS/vCWV4C58eTk5OcGLPXCsCJDLhnrT1nhqGEvK9kT8glMwwlwHMHUnLO9xRYFfKzqo6GxZBXFfheJJQkN/0tLIG9zNoL4TDAHSF/lJO/jaLoUBRFR5VcLIDAN5IjYTDWXhHgZ4l5l8fxqTzPjwn52qcj5IMgGGPMASXfFxMDL+9G0XHXVOBxidlW4KG7LogmS5LTPoU0Tcd8X4GPJdJhwlWaJOf9Gul2uwcroK/lQr5sQldGSgpM/gYFJl3f7OlS1VEBPvg1og0MITdrb5gSx+MCbDUKArbcPLVTuk2eFWCjIcxGp9M5s/tbR641lNDarjH7DfRFgFdKLmTkVHUfawvU+2O8ce/B9kDAJwWm3TuwitoxqRBrKCVv+b5Ye6N1kCshV8r+ghkS0EyRELkyFCAFVgsQMN86SIG4stivtwISclPIRz6ZMp31Hb8uQ+1DAqxba0/+ExNipxZgPiWv1f7uVmC5ERCwXAvwl4SeNASa/i9QmiSXiuMMBwra7uskK8CzAacza/qpPM+PKPl0AEm5g+Nsd2LicF+gSlIX3RYv5IvyCak33PXkTNAfDmY/1C+n+MypCSxqOwAAAABJRU5ErkJggg=="} />
            <p>Mis Turnos</p>
          </Button>
        }
      </div>
    </>
  );
}
