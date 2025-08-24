import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { HeaderComponent } from './components/header/header.component';


export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  RouterModule,
  MultiSelectModule,
  HeaderComponent  
];
