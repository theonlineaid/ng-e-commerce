import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MatIconModule } from '@angular/material/icon'; // Import Angular Material Icon module
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button module
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-custom-search-bar',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatButtonModule, NgIconComponent],
  viewProviders: [provideIcons({ featherSearch, heroUsers })],
  templateUrl: './custom-search-bar.component.html',
  styleUrls: ['./custom-search-bar.component.css']
})
export class CustomSearchBarComponent {
  searchTerm: string = '';

  onSearch() {
    console.log('Search Term:', this.searchTerm);
    // Implement search logic here
  }
}
