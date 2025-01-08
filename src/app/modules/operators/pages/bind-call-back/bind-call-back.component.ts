import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-bind-call-back',
  templateUrl: './bind-call-back.component.html',
  styleUrl: './bind-call-back.component.sass',
  imports: [CommonModule]
})
export class BindCallBackComponent {

  fileContent: string | ArrayBuffer | null = 'No file uploaded yet.';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Se envuelve el método readAsText de FileReader con un bindCallback
      const readFileAsText = bindCallback((file: Blob, callback: (result: string) => void) => {
        const reader = new FileReader();
        reader.onload = () => callback(reader.result as string);
        reader.onerror = () => callback('Error reading file.');
        reader.readAsText(file);
      });

      // Llama la función y se suscribe al resultado
      readFileAsText(file).subscribe({
        next: (content) => (this.fileContent = content),
        error: (err) => console.error('Error reading file:', err),
      });
    }
  }
}