import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { SocialComponent } from "./social/social.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { ConfigService } from "./config.service";
import { BlogComponent } from "./blog/blog.component";
import { ArticleComponent } from "./article/article.component";
import { PostComponent } from "./post/post.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { PagerService } from "./pager.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    NavigationComponent,
    SocialComponent,
    HeaderComponent,
    BlogComponent,
    ArticleComponent,
    PostComponent,
    NotfoundComponent,
    PaginationComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ConfigService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
