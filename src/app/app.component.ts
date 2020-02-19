import {Component, ComponentFactoryResolver, Injector, OnDestroy, SimpleChange, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('template', {read: ViewContainerRef}) template: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver, 
    private injector: Injector
  ) {}

  loadComponent() {
    import('./lazy/lazy.component').then(({LazyComponent})=>{
      console.log(LazyComponent);
      const component = this.cfr.resolveComponentFactory(LazyComponent);
      // const {instance} = this.template.createComponent(component, null, this.injector);
    });
  }

}
