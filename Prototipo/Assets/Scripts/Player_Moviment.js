#pragma strict

var speed = 4.5f; //Variavel que corresponde a velocidade de movimento do jogador
var where: int; //Serve para indentificar onde o jogador está no tabuleiro
var canMove: boolean; //Variavel que só tem utilidade para o movimento para baixo, verifica quando pode se mover(true) e após a 
                      //movimentação ele passa a receber false.
static var cameraMove: boolean; //Funciona para a camera saber quando pode se movimentar para acompanhar o player
                                //Esa variavel é static por que ela é global para o script "Scene_Camera" poder usa-lo 

function Start () {
	where = 0; // 0 = Centro / 1 = Topo / -1 = Baixo
}

function Update () {
	Moviment();
}

// Função responsavel pela movimentação do jogador, não é usado o método "Translate" por não dependermos de uma movimentação
//fluida e sim de uma movimentação estática.
function Moviment () { 
	if(Input.GetKeyDown(KeyCode.UpArrow))
	{
		if(where == 0)
		{
			transform.position.y += 1.6; //Esse valor é fixo para por causa das divisões do tabuleiro.
			where = 1;
		}
		if(where == -1)
		{
			transform.position.y += 1.6; //Esse valor é fixo para por causa das divisões do tabuleiro.
			where = 0;
		}
	}
	if(Input.GetKeyDown(KeyCode.DownArrow))
	{
	canMove = true;
		if(where == 1 && canMove == true)
		{
			transform.position.y -= 1.6; //Esse valor é fixo para por causa das divisões do tabuleiro.
			where = 0;
			canMove = false;
		}
		if(where == 0 && canMove == true)
		{
			transform.position.y -= 1.6; //Esse valor é fixo para por causa das divisões do tabuleiro.
			where = -1;
			canMove = false;
		}
	}
	if(Input.GetKeyDown(KeyCode.RightArrow))
	{
		transform.position.x += 1.7; //Esse valor é fixo para por causa das divisões do tabuleiro.
		cameraMove = true; //Colocamos a variavel true somente nessa ocasião mas só nos importa quando o jogador anda para frente.
	}
}
