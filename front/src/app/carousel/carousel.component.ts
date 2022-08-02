import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { CarouselService } from '../../services/carousel.service';
import { Quiz, Theme } from '../../models/quiz.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
    @Input() service: CarouselService;
    nextItemToShow: number;
    currentItem: number;
    saveItem: number;
    @Output() chosenItem = new EventEmitter<string>();

    constructor(private elementRef: ElementRef) {
        this.nextItemToShow = 6;
        this.currentItem = 0;
        this.saveItem = 0;
    }

    get numberOfItem(): number {
        return this.service._numberOfItem;
    }

    get items(): Theme[] | Quiz[] {
        return this.service._items;
    }

    set items(value: Theme[] | Quiz[]) {
        this.service._items = value;
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.saveItem = this.currentItem;
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent): void {
        if (event.key === 'ArrowRight') {
            this.shiftTheme(-1);
        } else if (event.key === 'ArrowLeft') {
            this.shiftTheme(1);
        }
    }

    shiftTheme(index: number): void {
        console.log(this.items);
        const cells = this.elementRef.nativeElement.getElementsByTagName(
            'ul'
        )[0].children;
        if (index > 0) {
            if (
                Array.from(cells).find((cell: HTMLElement) =>
                    cell.classList.contains('theme-5')
                ) !== undefined
            ) {
                this.currentItem = this.getNumber(
                    this.currentItem - index,
                    this.numberOfItem
                );
                for (let i = cells.length - 1; i >= 0; i--) {
                    const value: number = parseInt(
                        cells[i].classList[0].split('-').pop(),
                        10
                    );
                    if (
                        value <= 3 &&
                        value + index > 3 &&
                        this.numberOfItem > 6
                    ) {
                        const nb = this.nextItemToShow % this.numberOfItem;
                        const item = this.items[nb];
                        cells[i].children[0].setAttribute('src', item.imgUrl);
                        cells[i].children[1].innerHTML = item.name;
                        this.nextItemToShow--;
                    }
                    cells[i].classList.replace(
                        'theme-' + value,
                        'theme-' + this.getNumber(value + index, 6)
                    );
                }
            }
        } else {
            if (
                Array.from(cells).find((cell: HTMLElement) =>
                    cell.classList.contains('theme-1')
                ) !== undefined
            ) {
                this.currentItem = this.getNumber(
                    this.currentItem - index,
                    this.numberOfItem
                );
                for (const cell of cells) {
                    const value: number = parseInt(
                        cell.classList[0].split('-').pop(),
                        10
                    );
                    if (
                        value >= 3 &&
                        value + index < 3 &&
                        this.numberOfItem > 6
                    ) {
                        const nb = this.nextItemToShow % this.numberOfItem;
                        const item = this.items[nb];
                        cell.children[0].setAttribute('src', item.imgUrl);
                        cell.children[1].innerHTML = item.name;
                        this.nextItemToShow++;
                    }
                    cell.classList.replace(
                        'theme-' + value,
                        'theme-' + this.getNumber(value + index, 6)
                    );
                }
            }
        }
    }

    onSubmitItem(url: string): void {
        this.chosenItem.emit(url);
    }

    private getNumber = (nb: number, total: number) =>
        ((nb % total) + total) % total;
}
