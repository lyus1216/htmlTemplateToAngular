import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"]
})
export class TestimonialsComponent implements OnInit {
  testimonial = {};

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.testimonial = this.getTestimonial();
  }

  getTestimonial() {
    return this.config.getConfig().testimonial;
  }
}
