import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.css"]
})
export class IntroductionComponent implements OnInit {
  intro = {};

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.intro = this.getIntro();
  }

  getIntro() {
    return this.config.getConfig().intro;
  }
}
