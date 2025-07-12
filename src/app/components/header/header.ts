import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [] ,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    menu = [
    { item: 'Add', url: './add' },
  ];
}
