import { createApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { ApplicationRef } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { CustomComponent } from "./app/custom/custom.component";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const customComponent = createCustomElement(CustomComponent, { injector: app.injector });
  customElements.define("custom-component", customComponent);
})();
