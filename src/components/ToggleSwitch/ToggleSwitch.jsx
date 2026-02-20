 import "./ToggleSwitch.css";

 export default function ToggleSwitch() {
    return <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch_checkbox" />
        <span className="toggle-switch-circle"><span/>
        <span className="toggle-switch-text toggle-switch-text-C">F<span/>
        <span className="toggle-switch-text toggle-switch-text-F">C<span/>

    );
}