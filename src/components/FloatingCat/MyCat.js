import React from "react";

class MyCat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: props.backgroundColor || 'white',
            leftEyeX: 850,
            leftEyeY: 505,
            smallEyeX: 840,
            smallEyeY: 500,
            mouseX: 0,
            mouseY: 0,
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({ mouseX: e.clientX, mouseY: e.clientY });
        });

        setInterval(() => {
            const myRadius = 15;
            const [mouseX, mouseY] = [this.state.mouseX, this.state.mouseY]

            let rect = document.querySelector('#mycat-svg').getBoundingClientRect();
            const triangleY = mouseY - (rect.top + (rect.bottom - rect.top) * 0.43)
            const triangleX = mouseX - (rect.left + (rect.right - rect.left) * 0.65)
            let newRadian = Math.atan(triangleY / triangleX)

            if (triangleX < 0) {
                newRadian = (newRadian + Math.PI) % (Math.PI * 2)
            }
            let newXOnBigCircle = Math.cos(newRadian) * (28 - myRadius - myRadius / 6)
            let newYOnBigCircle = Math.sin(newRadian) * (28 - myRadius - myRadius / 6)

            this.setState({
                smallEyeX: newXOnBigCircle + this.state.leftEyeX,
                smallEyeY: newYOnBigCircle + this.state.leftEyeY,
                newRadian: newRadian,
                rect: rect,
            });
        }, 10);
    }

    render() {
        return (
            <svg viewBox="0 0 1210.000000 1210.000000"
                {...this.props}
                preserveAspectRatio="xMidYMid meet" id="mycat-svg">

                {/* <rect width="100%" height="100%" fill={this.state.backgroundColor}/> */}
                <circle cx="605" cy="605" r="600" stroke={this.state.backgroundColor} strokeWidth="1" fill={this.state.backgroundColor} />


                <g transform="translate(-86,1210.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M6655 10069 c-980 -78 -1860 -490 -2540 -1191 -861 -885 -1272 -2109
            -1124 -3343 81 -679 324 -1317 713 -1870 245 -349 590 -699 931 -946 1016
            -736 2315 -943 3500 -558 l160 52 160 -22 c285 -39 335 -42 716 -48 485 -7
            790 14 1124 77 306 58 545 159 604 254 30 47 28 117 -3 163 -88 129 -408 237
            -866 292 -140 17 -407 41 -462 41 -9 0 40 54 114 127 544 533 918 1185 1102
            1919 282 1126 84 2300 -553 3274 -68 104 -243 336 -308 409 l-48 53 -1 -268
            c0 -252 -2 -277 -26 -389 -34 -156 -80 -291 -99 -288 -8 0 -66 15 -129 31
            -211 56 -308 67 -595 67 -230 0 -375 -10 -446 -31 -19 -5 -56 104 -91 271 -21
            99 -23 137 -23 374 l0 263 -48 -53 c-193 -217 -410 -546 -565 -859 -88 -178
            -237 -429 -344 -577 -128 -179 -188 -344 -188 -520 l0 -90 -142 -27 c-79 -15
            -169 -32 -201 -38 -58 -11 -80 -29 -59 -50 7 -7 69 1 207 27 108 20 198 35
            200 33 2 -2 6 -20 10 -41 l7 -37 -196 -95 c-189 -91 -222 -116 -182 -131 8 -3
            99 35 202 84 l188 90 46 -92 c139 -280 390 -493 755 -640 103 -42 115 -51 167
            -130 105 -162 105 -370 -1 -532 -159 -247 -534 -429 -996 -484 -56 -7 -339
            -16 -640 -20 -512 -8 -548 -9 -694 -34 -640 -106 -1108 -275 -1426 -514 l-88
            -65 -28 34 c-60 72 -190 259 -254 364 -581 964 -605 2185 -62 3170 498 906
            1393 1511 2425 1641 70 9 237 20 372 25 519 19 522 20 673 50 53 10 64 17 128
            84 95 98 138 184 139 277 0 37 -4 70 -10 73 -5 3 -10 19 -10 35 0 26 -48 94
            -102 147 -51 49 -126 113 -133 113 -5 0 -16 6 -24 14 -50 45 -633 79 -936 55z
            m1983 -2789 c91 -39 162 -138 162 -225 0 -94 -80 -196 -185 -235 -216 -80
            -459 106 -394 301 52 154 252 230 417 159z m960 0 c91 -39 162 -138 162 -225
            0 -94 -80 -196 -185 -235 -216 -80 -459 106 -394 301 52 154 252 230 417 159z
            m-597 -519 c20 -20 29 -39 29 -61 0 -22 -9 -41 -29 -61 -20 -20 -39 -29 -61
            -29 -22 0 -41 9 -61 29 -20 20 -29 39 -29 61 0 22 9 41 29 61 20 20 39 29 61
            29 22 0 41 -9 61 -29z"/>
                    <path d="M8374 7260 c-41 -13 -91 -70 -99 -114 -9 -48 10 -99 50 -135 103 -90
            270 -23 270 109 0 51 -19 87 -66 122 -29 22 -111 31 -155 18z"/>
                    <path d="M9334 7260 c-41 -13 -91 -70 -99 -114 -9 -48 10 -99 50 -135 103 -90
            270 -23 270 109 0 51 -19 87 -66 122 -29 22 -111 31 -155 18z"/>
                </g>

                <circle cx={this.state.leftEyeX - 86} cy={this.state.leftEyeY} r="28" stroke="white" strokeWidth="3.2" fill="white" />
                <circle cx="860" cy="505" r="28" stroke="white" strokeWidth="3.2" fill="white" />

                <circle cx={this.state.smallEyeX - 86} cy={this.state.smallEyeY} r="15" stroke="black" strokeWidth="3.2" fill="black" />
                <circle cx={this.state.smallEyeX + 10} cy={this.state.smallEyeY} r="15" stroke="black" strokeWidth="3.2" fill="black" />

                <circle cx="808" cy="540" r="8" stroke="white" strokeWidth="3.2" fill="white" />

            </svg>
        )
    }
}

export default MyCat;