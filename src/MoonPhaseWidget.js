import getGeoData from "./actions/getGeoData";
import renderWidgetHtml from "./actions/renderWidgetHtml";

class MoonPhaseWidget {
  constructor(containerId = "moon-phase-widget",
              getGeoDataFn = getGeoData, renderFn = renderWidgetHtml) {
    this.containerId = containerId;
    this.el = document.getElementById(containerId);
    this.getGeoDataFn = getGeoDataFn;
    this.renderFn = renderFn;

    this.mount()
      .catch(err => console.log(err));
  }

  async mount() {
    const geoData = await this.getGeoDataFn();
    const moonPhaseData = await this.getMoonPhaseData(geoData.latitude, geoData.longitude);

    this.el.innerHTML = this.renderFn(moonPhaseData, geoData);
    this.loadBackgroundColor();
  }

  async getMoonPhaseData(latitude, longitude) {
    const apiUrl = DEV_URL ?
      "http://localhost:8090/api/public/moon-phase" :
      "https://moonorganizer.com/api/public/moon-phase";

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ latitude, longitude, date: new Date() })
    });

    return await res.json();
  }

  loadBackgroundColor() {
    const colorValue = this.el.dataset.color;
    if (colorValue && this.el.firstElementChild) {
      this.el.firstElementChild.style.backgroundColor = colorValue;
    }
  }
}

export default MoonPhaseWidget;