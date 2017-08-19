export class State {

	private _play: boolean = true;	
	private _stop: boolean = false;
	private _pause: boolean = false;
	
	private _backward: boolean = false;

	get stop(): boolean { return this._stop; }
	get backward(): boolean { return this._backward; }
	get play(): boolean { return this._play; }
	get pause(): boolean { return this._pause; }
	

	setPlay() {
		this._stop = true;
		this._pause = true;		
		this._play = this._backward = false;		
	}
	setStop() {
		this._stop = false;
		this._pause = false;				
		this._play = this._backward = true;		
	}
	setPause() {
		this._pause = false;
		this._stop = true;		
		this._play = true;	
		this._backward = true;		
		
	}
	setBackward() {
		this._play = true;
		this._stop = this._backward = false;		
	}
}