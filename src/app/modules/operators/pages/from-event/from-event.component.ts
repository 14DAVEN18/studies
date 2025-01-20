import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.sass'
})
export class FromEventComponent {
  public result: string = ''
  private clickSubscription!: Subscription

  public scrollResult: string = ''
  private scrollSubscription!: Subscription
  items = Array.from({length: 50}, (_, i) => i + 1)
  

  ngOnInit(): void {
    const clickObservable = fromEvent<MouseEvent>(document, 'click')

    this.clickSubscription = clickObservable.subscribe((event: MouseEvent) => {
      this.result = `Hizo clic en: x=${event.clientX}, y=${event.clientY}`
    })

    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement

    if(scrollContainer) {
      this.scrollSubscription = fromEvent(scrollContainer, 'scroll', { passive: true }).subscribe(() => {
        const scrollTop = scrollContainer.scrollTop
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight
        this.scrollResult = `posición de scroll: ${scrollTop} / ${scrollHeight}`
      })
    }
  }

  ngOnDestroy() {
    if(this.clickSubscription)
      this.clickSubscription.unsubscribe()

    if(this.scrollSubscription)
      this.scrollSubscription.unsubscribe()
  }
}
