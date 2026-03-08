import { useEffect } from "react";

const TawkChat = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    // script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID";
    script.src = "https://embed.tawk.to/69aa678965912c1c38ffe6a1/1jj0q8sd4";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkChat;