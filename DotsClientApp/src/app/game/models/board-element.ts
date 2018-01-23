import { DotElement, LineElement, BoxElement, GameElement } from './index';
export class BoardElement extends GameElement {
    Dots: DotElement[] = [];

    Lines: LineElement[] = [];

    Boxes: BoxElement[] = [];

    constructor(public width: number, public height: number, public rows: number, public cols: number) {
        super();

        this.createDots();
        this.createLine(rows, cols);
        this.createBoxes(rows, cols);
    }

    private createDots() {
        const xSpace = this.width / this.cols;
        const ySpace = this.height / this.rows;

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const x = col * xSpace;
                const y = row * ySpace;

                const dot = new DotElement(x, y);
                this.Dots.push(dot);
            }
        }
    }

    createLine(rows: number, cols: number) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols - 1; col++) {

                const firstDot = this.findDot(row, col);
                const secondDot = this.findDot(row, col + 1);

                const line = new LineElement(firstDot, secondDot);
                this.Lines.push(line);
            }
        }

        for (let row = 0; row < rows - 1; row++) {
            for (let col = 0; col < cols; col++) {
                const firstDot = this.findDot(row, col);
                const secondDot = this.findDot(row + 1, col);

                const line = new LineElement(firstDot, secondDot);
                this.Lines.push(line);
            }
        }
    }

    createBoxes(rows: number, cols: number) {
        const boxesCount = (this.rows - 1) * (this.cols - 1);
        for (let i = 0; i < boxesCount; i++) {
            const x = (this.rows - 1) % i;
            const y = (this.cols - 1) % i;

            const left = this.findLine(x, y, x, y + 1);
            const right = this.findLine(x + 1, y, x + 1, y + 1);
            const up = this.findLine(x, y, x + 1, y);
            const down = this.findLine(x, y + 1, x + 1, y + 1);

            this.Boxes.push(new BoxElement(left, up, right, down));
        }
    }

    private findDot(x: number, y: number): DotElement {
        return this.Dots[x + this.cols * y];
    }

    private findLine(startX: number, startY: number, endX: number, endY: number): LineElement {
        const horizontalIndex = startX === endX ? 0 : 1;
        const horizontalBreakIndex = (this.cols - 1 * this.rows) - 1; // zero based

        return this.Lines[horizontalBreakIndex * horizontalIndex + startX + this.cols * startY];
    }

    private findBox(x: number, y: number): BoxElement {
        return this.Boxes[x + (this.cols - 1) * y];
    }
}
