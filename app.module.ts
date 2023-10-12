import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassAndStyleBindingComponent } from './class-and-style-binding/class-and-style-binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxbootstrapdatepickerComponent } from './ngxbootstrapdatepicker/ngxbootstrapdatepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushAndsliceComponent } from './push-andslice/push-andslice.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ExcParentComponent } from './exc-parent/exc-parent.component';
import { ExChild1Component } from './ex-child1/ex-child1.component';
import { ExChild2Component } from './ex-child2/ex-child2.component';
import { DesignutilityService } from './appServices/designutility.service';
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { BbtDirective } from './bbt.directive';
import { UxpipePipe } from './appPipes/uxpipe.pipe';
import { FilterPipe } from './appPipes/filter.pipe';


const appRoutes:Routes=[
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'buy-products',component:ParentComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'television',component:TelevisionComponent},
    {path:'washingmachine',component:WashingMachineComponent},
  ]},
  {path:'**',component:PagenotfoundComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassAndStyleBindingComponent,
    EventbindingComponent,
    TemplatereferencevariableComponent,
    TwoWayDataBindingComponent,
    NgxbootstrapdatepickerComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    PushAndsliceComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PagenotfoundComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    ExcParentComponent,
    ExChild1Component,
    ExChild2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    BbtDirective,
    UxpipePipe,
    FilterPipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule

    
    
    


    
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
