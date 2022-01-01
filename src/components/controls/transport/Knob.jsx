import React, { Component } from "react";
import SvgKnob from "svg-knob";

class Knob extends Component {
    defaults = {
        default_value: 25,
        initial_value: 25,
        value_min: 0,
        value_max: 100,
        value_resolution: 1,

        bg_radius: 32,
        bg_border_width: 1,

        track_bg_radius: 40,
        track_bg_width: 8,

        track_radius: 40,
        track_width: 8,

        cursor_radius: 18, // same unit as radius
        cursor_length: 10,
        cursor_width: 4,

        palette: "light2",
        track_bg: false,
        linecap: "butt",
        value_text: true,
        format: (v) => v + "%",
        font_family: "sans-serif",
        font_size: 25,

        font_weight: "bold",
        markers: 4, // number of markers; 0 or false to disable
        markers_radius: 40,
        markers_length: 8,
        markers_width: 5,

        mouse_wheel_acceleration: 8,

        onchange: (val) => {
            this.props.setVolume(val);
        },
    };

    handleChange = (e) => {
        if (this.props.onChange) this.props.onChange(e);
    };

    componentDidMount() {
        this.k = new SvgKnob(this.dom, this.defaults);
        this.dom.addEventListener("change", this.handleChange);
    }

    shouldComponentUpdate() {
        return this.k === null;
    }

    render() {
        return <svg ref={(elem) => (this.dom = elem)} />;
    }
}

export default Knob;
