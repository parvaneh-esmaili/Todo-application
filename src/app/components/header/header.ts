import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterLink] ,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    menu = [
    { item: 'List', url: './list' },
    { item: 'Add', url: './add' },
    { item: 'Register', url: './register' },
    { item: 'login', url: './login' },
  ];
}
