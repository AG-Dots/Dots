import { DotElement, GameElement } from './index';

export class LineElement extends GameElement {
    constructor(public dot1: DotElement, public dot2: DotElement, public state = 'inactive') {
        super();
    }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
