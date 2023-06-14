import "./Accordion.scss"

import beer from "../images/beer.jpg"
import flutterImg from "../images/flutterDevelop2.jpg"
import webDevelopment from "../images/webDevelopment.jpg"
import angular from "../images/angular.jpg"
import netCore from "../images/netCore.jpg"
import node from "../images/node.jpg"
import reactJs from "../images/reactJs.jpg"
import beerLogo from "../images/svg/beer-sprit.svg"

import BeerIcon from '../images/svg/beer.js'
import React, { useRef, useState, useEffect } from 'react';

const Accordion = () => {

    const [activePanel, setActivePanel] = useState(0);

    const toggleAccordion = (panelIndex) => {
        if (panelIndex !== activePanel) {
            setActivePanel((prevActivePanel) =>
                panelIndex === prevActivePanel ? -1 : panelIndex
            );
        }
    };

    const renderPanels = () => {
        const panels = [
            {
                title: 'Flutter',
                content: 'Experienced in Flutter app development, including DMS app and warehouse inventory scanning app.',
                image: flutterImg,
                icon: (
                    <svg
                        className="accordion-icon"
                        fill="#000000"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m20.095 2-6.197.007L3.905 12l3.083 3.086 2.71-2.694zm-5.391 14.599 5.385-5.38-5.909-.001c-.112.014-.26-.039-.341.067l-2.235 2.234-3.089 3.085 3.09 3.091 2.153 2.156c.074.065.145.171.26.145 2.024-.004 4.047.001 6.072-.003l-5.375-5.38-.011-.014z" />
                    </svg>
                ),
            },
            {
                title: 'AngularJS',
                content: 'Experienced in developing DMS (Document Management System) applications using Angular framework.',
                image: angular,
                icon: (
                    <svg
                        className="accordion-icon"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10.1739 12.594H13.8259L11.9999 8.095L10.1739 12.594Z" fill="red" />
                        <path d="M12 1L2 4.652L3.52524 18.193L12 23L20.4748 18.193L22 4.652L12 1ZM18.2406 17.786H15.9098L14.6531 14.574H9.34694L8.09022 17.786H5.7594L12 3.431L18.2406 17.786Z" fill="red" />
                    </svg>
                ),
            },
            {
                // <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                title: 'ReactJS',
                content: 'I have experience in building web applications using React JS. Additionally, I have integrated third-party libraries and APIs to enhance the functionality of React applications. React has been a game-changer in modern web development.',
                image: webDevelopment,
                icon: (
                    <svg
                        className="accordion-icon"
                        fill="#000000"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M 11.404297 3.359375 C 10.558989 3.3033199 9.7282187 3.4545628 9 3.875 C 8.0290418 4.435583 7.3824561 5.3924554 7.0351562 6.4941406 C 6.6878566 7.5958258 6.6075884 8.8654625 6.734375 10.251953 C 6.7472175 10.392393 6.7719235 10.538778 6.7890625 10.681641 C 6.6565239 10.738327 6.516949 10.790405 6.3886719 10.849609 C 5.1245423 11.433054 4.0655937 12.136668 3.2851562 12.988281 C 2.5047189 13.839894 2 14.878834 2 16 C 2 17.121166 2.5047188 18.160106 3.2851562 19.011719 C 4.0655937 19.863332 5.1245423 20.566946 6.3886719 21.150391 C 6.516949 21.209595 6.6565239 21.261673 6.7890625 21.318359 C 6.7719235 21.461222 6.7472175 21.607607 6.734375 21.748047 C 6.6075884 23.134538 6.6878566 24.404174 7.0351562 25.505859 C 7.3824561 26.607544 8.0290418 27.564417 9 28.125 C 9.9709582 28.685583 11.122263 28.76765 12.25 28.517578 C 13.377738 28.267506 14.516954 27.701483 15.654297 26.898438 C 15.769442 26.817137 15.884905 26.722947 16 26.636719 C 16.115095 26.722947 16.230558 26.817137 16.345703 26.898438 C 17.483046 27.701483 18.622262 28.267506 19.75 28.517578 C 20.877737 28.76765 22.029042 28.685583 23 28.125 C 23.970958 27.564417 24.617544 26.607544 24.964844 25.505859 C 25.312144 24.404174 25.392412 23.134538 25.265625 21.748047 C 25.252783 21.607607 25.228076 21.461222 25.210938 21.318359 C 25.343476 21.261673 25.483051 21.209595 25.611328 21.150391 C 26.875458 20.566946 27.934406 19.863332 28.714844 19.011719 C 29.495281 18.160106 30 17.121166 30 16 C 30 14.878834 29.495281 13.839894 28.714844 12.988281 C 27.934406 12.136668 26.875458 11.433054 25.611328 10.849609 C 25.483051 10.790405 25.343476 10.738327 25.210938 10.681641 C 25.228076 10.538778 25.252783 10.392393 25.265625 10.251953 C 25.392412 8.8654622 25.312144 7.5958262 24.964844 6.4941406 C 24.617544 5.3924558 23.970958 4.435583 23 3.875 C 22.029042 3.314417 20.877737 3.2323501 19.75 3.4824219 C 18.622262 3.7324945 17.483046 4.2985163 16.345703 5.1015625 C 16.230558 5.1828631 16.115095 5.2770534 16 5.3632812 C 15.884905 5.2770534 15.769442 5.1828632 15.654297 5.1015625 C 14.516954 4.2985167 13.377738 3.7324941 12.25 3.4824219 C 11.968066 3.4199038 11.686066 3.37806 11.404297 3.359375 z M 11.273438 5.3515625 C 11.44385 5.3643925 11.625005 5.3926711 11.818359 5.4355469 C 12.574044 5.6031175 13.479049 6.027269 14.433594 6.6914062 C 13.638579 7.445577 12.856199 8.3035536 12.109375 9.2636719 C 10.905846 9.4303655 9.7722189 9.6771858 8.7226562 9.9882812 C 8.6249172 8.8300209 8.708758 7.8336973 8.9414062 7.0957031 C 9.1795887 6.3401532 9.5360797 5.8752664 10 5.6074219 C 10.34794 5.4065385 10.762201 5.3130725 11.273438 5.3515625 z M 20.726562 5.3515625 C 21.237799 5.3130724 21.65206 5.4065385 22 5.6074219 C 22.46392 5.8752664 22.820412 6.3401534 23.058594 7.0957031 C 23.291242 7.8336973 23.375082 8.830021 23.277344 9.9882812 C 22.227781 9.6771858 21.094154 9.4303655 19.890625 9.2636719 C 19.143801 8.3035536 18.361421 7.445577 17.566406 6.6914062 C 18.520951 6.0272696 19.425956 5.6031175 20.181641 5.4355469 C 20.374995 5.3926712 20.556151 5.3643925 20.726562 5.3515625 z M 16 7.9589844 C 16.351492 8.2839608 16.702356 8.645337 17.052734 9.0234375 C 16.704015 9.0111056 16.355492 9 16 9 C 15.644508 9 15.295985 9.0111056 14.947266 9.0234375 C 15.297644 8.645337 15.648508 8.2839609 16 7.9589844 z M 16 11 C 16.964537 11 17.899388 11.05672 18.798828 11.152344 C 19.331359 11.883468 19.847811 12.66469 20.330078 13.5 C 20.81238 14.335371 21.230731 15.173194 21.597656 16 C 21.230731 16.826806 20.81238 17.664629 20.330078 18.5 C 19.847811 19.33531 19.331359 20.116532 18.798828 20.847656 C 17.899388 20.94328 16.964537 21 16 21 C 15.035463 21 14.100612 20.94328 13.201172 20.847656 C 12.668641 20.116532 12.152189 19.33531 11.669922 18.5 C 11.18762 17.664629 10.769268 16.826806 10.402344 16 C 10.769268 15.173194 11.18762 14.335371 11.669922 13.5 C 12.152189 12.66469 12.668641 11.883468 13.201172 11.152344 C 14.100612 11.05672 15.035463 11 16 11 z M 10.484375 11.599609 C 10.299345 11.895429 10.115237 12.192151 9.9375 12.5 C 9.7597627 12.80785 9.5953134 13.115677 9.4316406 13.423828 C 9.2796229 12.932067 9.1426994 12.44671 9.0371094 11.980469 C 9.4941217 11.838603 9.981943 11.71397 10.484375 11.599609 z M 21.515625 11.599609 C 22.018057 11.71397 22.505878 11.838603 22.962891 11.980469 C 22.857301 12.44671 22.720377 12.932067 22.568359 13.423828 C 22.404687 13.115677 22.240237 12.80785 22.0625 12.5 C 21.884763 12.192151 21.700655 11.895429 21.515625 11.599609 z M 7.1542969 12.703125 C 7.409859 13.768497 7.7627696 14.873405 8.2207031 16 C 7.7627696 17.126595 7.409859 18.231503 7.1542969 19.296875 C 6.1028081 18.802492 5.282404 18.230459 4.7597656 17.660156 C 4.2245315 17.076109 4 16.535689 4 16 C 4 15.464311 4.2245315 14.923891 4.7597656 14.339844 C 5.282404 13.769541 6.1028081 13.197508 7.1542969 12.703125 z M 24.845703 12.703125 C 25.897191 13.197508 26.717596 13.769541 27.240234 14.339844 C 27.775468 14.923891 28 15.464311 28 16 C 28 16.535689 27.775468 17.076109 27.240234 17.660156 C 26.717596 18.230459 25.897191 18.802492 24.845703 19.296875 C 24.590141 18.231503 24.23723 17.126595 23.779297 16 C 24.23723 14.873405 24.590141 13.768497 24.845703 12.703125 z M 16 13 C 14.35499 13 13 14.35499 13 16 C 13 17.64501 14.35499 19 16 19 C 17.64501 19 19 17.64501 19 16 C 19 14.35499 17.64501 13 16 13 z M 16 15 C 16.564129 15 17 15.435871 17 16 C 17 16.564129 16.564129 17 16 17 C 15.435871 17 15 16.564129 15 16 C 15 15.435871 15.435871 15 16 15 z M 9.4316406 18.576172 C 9.5953134 18.884323 9.7597627 19.19215 9.9375 19.5 C 10.115237 19.807849 10.299345 20.104571 10.484375 20.400391 C 9.981943 20.28603 9.4941217 20.161397 9.0371094 20.019531 C 9.1426994 19.55329 9.2796229 19.067933 9.4316406 18.576172 z M 22.568359 18.576172 C 22.720377 19.067933 22.857301 19.55329 22.962891 20.019531 C 22.505878 20.161397 22.018057 20.28603 21.515625 20.400391 C 21.700655 20.104571 21.884763 19.807849 22.0625 19.5 C 22.240237 19.19215 22.404687 18.884323 22.568359 18.576172 z M 8.7226562 22.011719 C 9.7722189 22.322814 10.905846 22.569634 12.109375 22.736328 C 12.856199 23.696446 13.638579 24.554423 14.433594 25.308594 C 13.479049 25.97273 12.574044 26.396882 11.818359 26.564453 C 11.044942 26.735955 10.46392 26.660422 10 26.392578 C 9.5360797 26.124733 9.1795888 25.659846 8.9414062 24.904297 C 8.708758 24.166302 8.6249172 23.169979 8.7226562 22.011719 z M 23.277344 22.011719 C 23.375082 23.169979 23.29124 24.166302 23.058594 24.904297 C 22.820412 25.659847 22.46392 26.124733 22 26.392578 C 21.53608 26.660422 20.955057 26.735956 20.181641 26.564453 C 19.425956 26.396882 18.520951 25.97273 17.566406 25.308594 C 18.361421 24.554423 19.143801 23.696446 19.890625 22.736328 C 21.094154 22.569634 22.227781 22.322814 23.277344 22.011719 z M 14.947266 22.976562 C 15.295985 22.988894 15.644508 23 16 23 C 16.355492 23 16.704015 22.988894 17.052734 22.976562 C 16.702356 23.354663 16.351492 23.716039 16 24.041016 C 15.648508 23.716039 15.297644 23.354663 14.947266 22.976562 z" />

                        {/* <path d="m20.095 2-6.197.007L3.905 12l3.083 3.086 2.71-2.694zm-5.391 14.599 5.385-5.38-5.909-.001c-.112.014-.26-.039-.341.067l-2.235 2.234-3.089 3.085 3.09 3.091 2.153 2.156c.074.065.145.171.26.145 2.024-.004 4.047.001 6.072-.003l-5.375-5.38-.011-.014z" /> */}
                    </svg>
                ),
            },
            {
                title: 'NodeJS/NestJS',
                content: 'I have worked on several projects using Node.js and have a good understanding of its fundamentals. I am familiar with the Nest framework. With Nest, I have developed RESTful APIs, integrated with databases, implemented jwt authentication',
                image: node,
                icon: (
                    <svg
                        className="accordion-icon"
                        fill="#000000"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z" />
                    </svg>
                ),
            },
            {
                title: 'NetCore',
                content: 'Familiar with .NET Core and its fundamentals, including its modular and cross-platform nature. Have worked on projects using .NET Core and gained hands-on experience with its development tools and libraries.',
                image: netCore,
                icon: (
                    <svg
                        className="accordion-icon"
                        fill="#000000"
                        viewBox="0 0 960 960"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M303.58 871.32C276.758 868.956 249.754 862.319 224.204 853.681C148.738 827.95 108.186 772.76 99.7304 694.747C93.7294 639.284 90.8199 583.457 87.4557 527.63C84.0915 472.258 80 416.886 80 361.513C80 314.415 85.6372 267.317 104.458 223.128C125.734 173.393 162.558 139.842 212.566 120.385C252.572 104.837 294.67 99.745 336.858 94.8351C417.78 85.5609 498.884 82.1968 580.169 87.5612C644.088 91.7437 707.644 99.2904 766.744 125.931C806.386 143.843 834.482 173.666 848.484 215.854C864.123 262.771 869.942 311.233 873.943 360.149C880.034 435.434 881.671 510.809 878.216 586.276C875.852 636.738 867.669 686.11 847.575 732.48C816.115 805.128 764.471 855.5 683.64 868.593C655.454 873.139 626.631 874.685 598.081 875.412C555.711 876.503 513.25 875.685 470.789 875.685L303.58 871.32ZM493.247 813.129C552.71 810.493 605.628 808.674 658.545 805.492C700.097 803.037 734.375 785.307 760.47 752.211C796.294 706.749 808.023 653.013 811.478 597.459C817.115 506.718 814.297 416.067 804.204 325.689C800.567 293.048 795.567 260.952 777.018 232.584C772.108 225.037 768.199 216.763 763.653 208.944C751.832 188.668 736.466 170.574 713.645 164.391C663.091 150.571 610.992 143.843 558.711 143.934C500.702 144.025 442.511 145.298 384.775 150.116C341.223 153.753 297.852 162.209 255.118 171.665C202.11 183.394 171.105 219.491 157.558 270.954C143.464 324.598 143.555 379.425 146.829 434.343C150.011 486.806 154.193 539.268 158.103 591.731C160.649 625.009 162.377 658.378 166.559 691.474C173.105 742.118 200.019 777.76 250.118 792.217C274.03 799.127 298.852 805.219 323.493 806.765C382.138 810.493 440.875 811.311 493.247 813.129Z" fill="#000000" />
                        <path d="M493.247 813.13C440.875 811.312 382.139 810.493 323.493 806.766C298.762 805.22 274.031 799.037 250.118 792.218C200.019 777.761 173.106 742.119 166.559 691.475C162.286 658.47 160.558 625.01 158.103 591.732C154.103 539.269 150.011 486.897 146.829 434.344C143.556 379.517 143.465 324.69 157.558 270.954C171.106 219.583 202.11 183.395 255.119 171.666C297.853 162.21 341.223 153.754 384.775 150.117C442.512 145.207 500.703 144.025 558.712 143.934C611.084 143.844 663.092 150.663 713.645 164.392C736.467 170.666 751.833 188.669 763.653 208.945C768.199 216.764 772.109 225.038 777.019 232.585C795.567 260.862 800.568 293.049 804.205 325.69C814.297 416.068 817.116 506.719 811.479 597.46C808.024 653.014 796.294 706.75 760.471 752.212C734.376 785.308 700.188 803.038 658.546 805.493C605.628 808.584 552.711 810.403 493.247 813.13ZM384.412 652.832C387.321 658.015 389.776 666.107 395.141 671.017C407.87 682.837 427.327 677.018 435.056 659.197C440.784 645.922 445.148 632.011 449.24 618.1C480.881 510.265 512.341 402.339 543.891 294.413C549.074 276.683 541.073 259.953 524.797 254.952C508.886 250.042 492.247 259.953 487.246 277.592C484.973 285.593 483.336 293.776 481.063 301.868C452.877 402.793 424.691 503.718 396.595 604.734C392.413 619.736 388.958 634.92 384.412 652.832ZM249.209 460.984C288.397 429.616 325.311 399.884 362.408 370.334C374.774 360.514 378.865 348.694 372.955 337.328C367.045 325.872 353.134 321.144 338.95 327.054C330.04 330.782 321.129 335.601 313.582 341.602C274.758 372.607 236.298 403.975 197.837 435.526C188.199 443.436 183.289 454.71 186.653 466.621C189.472 476.805 194.109 487.534 200.928 495.353C232.661 531.995 273.303 557.727 313.31 584.003C329.494 594.641 350.497 584.913 355.225 567.092C358.862 553.18 353.589 542.088 342.587 533.723C325.311 520.539 307.581 507.81 290.397 494.535C276.94 484.079 264.029 473.077 249.209 460.984ZM703.916 460.439C699.825 463.985 697.097 466.803 693.915 469.167C656.818 496.99 619.63 524.721 582.443 552.544C567.44 563.818 563.531 580.003 572.532 593.278C581.897 606.916 599.809 609.826 614.72 597.915C661.364 560.454 707.644 522.539 753.288 483.897C771.472 468.531 770.108 449.982 751.56 434.889C731.011 418.159 710.19 401.793 689.187 385.7C672.184 372.698 654.727 360.332 637.36 347.785C633.542 345.057 629.541 342.42 625.359 340.42C612.356 334.419 598.627 338.238 591.808 349.33C585.261 360.059 587.534 373.88 598.536 382.426C613.175 393.792 628.541 404.066 643.361 415.159C663.455 429.888 683.277 444.982 703.916 460.439Z" fill="white" />
                        <path d="M384.414 652.83C388.96 634.827 392.415 619.643 396.598 604.732C424.693 503.807 452.97 402.882 481.066 301.866C483.339 293.865 484.975 285.591 487.248 277.589C492.249 259.95 508.888 250.04 524.8 254.95C541.075 259.95 549.076 276.68 543.894 294.41C512.343 402.336 480.884 510.262 449.242 618.097C445.151 632.009 440.787 645.92 435.058 659.195C427.421 677.016 407.872 682.744 395.143 671.015C389.869 666.105 387.415 658.104 384.414 652.83Z" fill="#000000" />
                        <path d="M249.212 460.985C263.941 473.077 276.943 484.079 290.309 494.444C307.494 507.719 325.224 520.448 342.499 533.632C353.501 541.997 358.865 553.181 355.137 567.001C350.409 584.822 329.406 594.551 313.222 583.913C273.216 557.636 232.573 531.905 200.841 495.263C194.021 487.352 189.475 476.714 186.566 466.531C183.201 454.529 188.111 443.345 197.749 435.435C236.119 403.885 274.67 372.516 313.495 341.511C321.041 335.51 329.952 330.691 338.862 326.964C353.046 321.054 366.958 325.782 372.868 337.238C378.778 348.694 374.686 360.423 362.32 370.243C325.315 399.884 288.4 429.616 249.212 460.985Z" fill="#000000" />
                        <path d="M703.913 460.437C683.274 444.981 663.452 429.887 643.358 415.067C628.447 404.065 613.081 393.7 598.533 382.334C587.532 373.788 585.258 359.967 591.805 349.238C598.624 338.146 612.354 334.327 625.356 340.328C629.629 342.328 633.539 344.965 637.358 347.693C654.724 360.24 672.181 372.606 689.184 385.608C710.187 401.701 731.009 418.067 751.557 434.797C770.106 449.89 771.469 468.439 753.285 483.805C707.641 522.447 661.27 560.362 614.718 597.823C599.897 609.734 581.894 606.824 572.529 593.186C563.437 579.911 567.347 563.726 582.44 552.452C619.627 524.72 656.815 496.898 693.912 469.075C697.094 466.802 699.913 463.983 703.913 460.437Z" fill="#000000" />

                    </svg>
                ),
            },


            // Dodajte ostale panele ovdje...
        ];

        return panels.map((panel, index) => (
            <div className="accordion-panel" key={index}>
                <h2 id={`panel${index + 1}-heading`}>
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="accordion-trigger"
                        aria-controls={`panel${index + 1}-content`}
                        aria-expanded={index === activePanel}
                    >
                        <span id={`panel${index + 1}-title`} className="accordion-title">{panel.title}</span>
                        <svg aria-hidden="true" className="accordion-icon">
                            //Ovdje ikona
                            <svg className="accordion-icon" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {panel.icon}
                            </svg>
                        </svg>
                    </button>
                </h2>

                <div
                    className="accordion-content"
                    id={`panel${index + 1}-content`}
                    aria-labelledby={`panel${index + 1}-heading`}
                    aria-hidden={index !== activePanel}
                    role="region"
                >
                    <p>{panel.content}</p>
                    <img
                        className="accordion-image"
                        src={panel.image}
                        alt="Panel Image"
                    />
                </div>
            </div>
        ));
    };

    useEffect(() => {
        setActivePanel(0);
    }, []);

    return (
        <div className="wrapper1">
            <div className="accordion">{renderPanels()}</div>
        </div>
    );
};

export default Accordion;



//     return <>
//         <div className="wrapper1">
//             <div className="accordion" onClick={handleClick} ref={accordionRef}>
//                 <div className="accordion-panel">
//                     <h2 id="panel1-heading">
//                         <button
//                               onClick={(event) => toggleAccordion(event)}
//                             className="accordion-trigger"
//                             aria-controls="panel1-content"
//                             aria-expanded="true"
//                         >
//                             <span id="panel1-title">Boating</span>
//                             <svg aria-hidden="true" className="accordion-icon">
//                                 {/* <use href="#beer1"></use> */}
//                                 <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black" />
//                                 </svg>
//                             </svg>
//                         </button>
//                     </h2>

//                     <div
//                         className="accordion-content"
//                         id="panel1-content"
//                         aria-labelledby="panel1-heading"
//                         aria-hidden="true"
//                         role="region"
//                     >
//                         <p>
//                             BLEE bleee bleee lbeeee bleeee bleeee bleeee bleee bleee bleee
//                         </p>
//                         <img
//                             className="accordion-image"
//                             src={beer}
//                             alt="Cold beer on a sunny day"
//                         />
//                     </div>
//                 </div>

//                 <div className="accordion-panel">
//                     <h2 id="panel2-heading">
//                         <button
//                               onClick={(event) => toggleAccordion(event)}
//                             className="accordion-trigger"
//                             aria-controls="panel2-content"
//                             aria-expanded="false"
//                         >
//                             <span id="panel2-title">Boating</span>
//                             <svg aria-hidden="true" className="accordion-icon">
//                                 {/* <use href="#beer1"></use> */}
//                                 <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black" />
//                                 </svg>
//                             </svg>
//                         </button>
//                     </h2>

//                     <div
//                         className="accordion-content"
//                         id="panel2-content"
//                         aria-labelledby="panel2-heading"
//                         aria-hidden="true"
//                         role="region"
//                     >
//                         <p>
//                             BLEE bleee bleee lbeeee bleeee bleeee bleeee bleee bleee bleee
//                         </p>
//                         <img
//                             className="accordion-image"
//                             src={flutterImg}
//                             alt="Flutter development proccess"
//                         />
//                     </div>
//                 </div>

//                 <div className="accordion-panel">
//                     <h2 id="panel3-heading">
//                         <button
//                               onClick={(event) => toggleAccordion(event)}
//                             className="accordion-trigger"
//                             aria-controls="panel3-content"
//                             aria-expanded="false"
//                         >
//                             <span id="panel3-title">Boating</span>
//                             <svg aria-hidden="true" className="accordion-icon">
//                                 {/* <use href="#beer1"></use> */}
//                                 <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black" />
//                                 </svg>
//                             </svg>
//                         </button>
//                     </h2>

//                     <div
//                         className="accordion-content"
//                         id="panel3-content"
//                         aria-labelledby="panel3-heading"
//                         aria-hidden="true"
//                         role="region"
//                     >
//                         <p>
//                             BLEE bleee bleee lbeeee bleeee bleeee bleeee bleee bleee bleee
//                         </p>
//                         <img
//                             className="accordion-image"
//                             src={beer}
//                             alt="Cold beer on a sunny day"
//                         />
//                     </div>
//                 </div>

//                 <div className="accordion-panel">
//                     <h2 id="panel4-heading">
//                         <button
//                               onClick={(event) => toggleAccordion(event)}
//                             className="accordion-trigger"
//                             aria-controls="panel4-content"
//                             aria-expanded="false"
//                         >
//                             <span id="panel4-title">Boating</span>
//                             <svg aria-hidden="true" className="accordion-icon">
//                                 {/* <use href="#beer1"></use> */}
//                                 <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black" />
//                                 </svg>
//                             </svg>
//                         </button>
//                     </h2>

//                     <div
//                         className="accordion-content"
//                         id="panel4-content"
//                         aria-labelledby="panel4-heading"
//                         aria-hidden="true"
//                         role="region"
//                     >
//                         <p>
//                             BLEE bleee bleee lbeeee bleeee bleeee bleeee bleee bleee bleee
//                         </p>
//                         <img
//                             className="accordion-image"
//                             src={beer}
//                             alt="Cold beer on a sunny day"
//                         />
//                     </div>
//                 </div>

//                 <div className="accordion-panel">
//                     <h2 id="panel5-heading">
//                         <button
//                               onClick={(event) => toggleAccordion(event)}
//                             className="accordion-trigger"
//                             aria-controls="panel5-content"
//                             aria-expanded="false"
//                         >
//                             <span id="panel5-title">Boating</span>
//                             <svg aria-hidden="true" className="accordion-icon">
//                                 {/* <use href="#beer1"></use> */}
//                                 <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black" />
//                                 </svg>
//                             </svg>
//                         </button>
//                     </h2>

//                     <div
//                         className="accordion-content"
//                         id="panel5-content"
//                         aria-labelledby="panel5-heading"
//                         aria-hidden="true"
//                         role="region"
//                     >
//                         <p>
//                             BLEE bleee bleee lbeeee bleeee bleeee bleeee bleee bleee bleee
//                         </p>
//                         <img
//                             className="accordion-image"
//                             src={beer}
//                             alt="Cold beer on a sunny day"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// }

// export default Accordion