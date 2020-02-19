import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// @NgModule({
//   declarations: [LazyComponent],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule
//   ]
// })
// export class LazyModule { }