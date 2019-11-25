import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  blog = {};

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.blog = this.getblog();
  }
  getblog(): any {
    return this.config.getConfig().blog;
  }
}
