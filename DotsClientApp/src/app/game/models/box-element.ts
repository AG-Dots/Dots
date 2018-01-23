import { LineElement, GameElement } from './index';
export class BoxElement extends GameElement {
    constructor(public left: LineElement, public up: LineElement, right: LineElement, down: LineElement) {
        super();
     }
}
