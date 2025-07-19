/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  // html,
  // TemplateResult,
  // css,
  // CSSResultGroup
} from "lit";
import {
  // HomeAssistant,
  // fireEvent,
  LovelaceCardEditor,
  LovelaceCard,
} from "custom-card-helpers";

// import { ScopedRegistryHost } from "@lit-labs/scoped-registry-mixin";
import { BoilerplateCardConfig } from "./types";
import { customElement, state } from "lit/decorators.js";
// import { formfieldDefinition } from "../elements/formfield";
// import { selectDefinition } from "../elements/select";
// import { switchDefinition } from "../elements/switch";
// import { textfieldDefinition } from "../elements/textfield";

@customElement("apexcharts-card-editor")
export class ApexchartsCardCardEditor extends LitElement {
  @state() private _config?: BoilerplateCardConfig;
  @state() private _helpers?: any;

  public setConfig(config: BoilerplateCardConfig): void {
    this._config = config;

    this.loadCardHelpers();
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }
  // setConfig(config) {
  //   this._config = config;
  // }

  // configChanged(newConfig) {
  //   const event = new Event("config-changed", {
  //     bubbles: true,
  //     composed: true,
  //   });
  //   event.detail = { config: newConfig };
  //   this.dispatchEvent(event);
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    "apexcharts-card-editor": LovelaceCardEditor;
    "hui-error-card": LovelaceCard;
  }
}