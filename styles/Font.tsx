import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Norwester";
        src: local("Norwester"),
          url("/fonts/Norwester/norwester.ttf") format("truetype");
      }
      @font-face {
        font-family: "Montserrat font";
        src: local("Montserrat font"),
          url("/fonts/Montserrat/Montserrat-Light.ttf") format("truetype"),
          url("/fonts/Montserrat/Montserrat-Thin.ttf") format("truetype"),
          url("/fonts/Montserrat/Montserrat-Medium.ttf") format("truetype"),
          url("/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype"),
          url("/fonts/Montserrat/Montserrat-SemiBold.ttf") format("truetype"),
          url("/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
      }
      @font-face {
        font-family: "Open Sans condensed";
        src: local("Open Sans condensed"),
          url("/fonts/Open Sans Condensed/OpenSansCondensed-Light.ttf") format("truetype"),
          url("/fonts/Open Sans Condensed/OpenSansCondensed-Bold.ttf") format("truetype");
      }
    `}
  />
)

export default Fonts
