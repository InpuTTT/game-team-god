#pragma strict

var speedCam = 9.0; //Velocidade a movimentação da camera
var oldX: float; //Saber até onde a camera pode ir
var animationCamera: boolean; //Serve para saber quando se pode começar a movimentar a camera
var firstTime: boolean; //A primeira movimentação é diferente das outras
var whereChangeSum: int; //Serve para sabermos e limitarmos as movimentações da camera, pois de 4 em 4 movimentações alteramos o valor da soma
function Start () {
	oldX = 1.66; //O primeiro valor do oldX é estático 
}

function Update () {
	Moviment();
}

function Moviment() {
	//Está primeira condição funciona para sabermos quando o jogador se movimentou
	if(Player_Moviment.cameraMove == true)
	{	
		animationCamera = true;	
		Player_Moviment.cameraMove = false;
		if(firstTime == true && whereChangeSum < 3)
		{
			oldX = oldX+1.7; //A partir da segunda movimentação a limitação de até onde a camera pode se movimentar muda, no começo
			                 //somamos 1.66 para a movimentação, após isso soma 1.7 até chegar na próxima quinta movimentação que ai
			                 //sim somamos 1.66 novamente.
		}
		else
		{
			if(firstTime == true)
			{
				oldX = oldX+1.66;
				whereChangeSum = 0;
			}
		}
	}

	//Quando o script descobre que já se pode movimentar usamos o "Translate" com a váriavel speedCam
	if(animationCamera == true)
	{
		transform.Translate(speedCam*Time.deltaTime, 0, 0);
	if(transform.position.x > oldX) //Aqui limitamos até onde a câmera pode chegar.
	{
		animationCamera = false;
		firstTime = true;
		whereChangeSum++;
	}
	}else
	{
			
	}
}
