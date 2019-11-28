import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { IntroductionComponent } from "./introduction/introduction.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricingComponent } from "./pricing/pricing.component";
import { HeaderComponent } from "./header/header.component";
import { BlogComponent } from "./blog/blog.component";
import { ArticleComponent } from "./article/article.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { RouteguardService } from "./routeguard.service";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HeaderComponent },
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  { path: "Contactus", component: ContactusComponent },
  { path: "About", component: IntroductionComponent },
  { path: "Gallery", component: GalleryComponent },
  { path: "Services", component: ContentComponent },
  { path: "Testimonials", component: TestimonialsComponent },
  { path: "Clients", component: ClientsComponent },
  { path: "Pricing", component: PricingComponent },
  { path: "Blog", component: BlogComponent, canActivate: [RouteguardService] },
  { path: "Article/:id", component: ArticleComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
