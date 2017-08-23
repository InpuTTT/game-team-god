#pragma strict

var speed = 4.5f; //Variavel que corresponde a velocidade de movimento do jogador
var where: int; //Serve para indentificar onde o jogador está no tabuleiro

function Start () {
	where = 0; // 0 = Centro / 1 = Topo / -1 = Baixo
}

function Update () {
	Moviment();
}

// Função responsavel pela movimentação do jogador
function Moviment () {
	if(Input.GetKeyDown(KeyCode.UpArrow))
	{
		if(where == 0)
		{
			transform.position.y += 1;
			where = 1;
		}
		if(where == -1)
		{
			transform.position.y += 1;
			where = 0;
		}
	}
	if(Input.GetKey(KeyCode.DownArrow))
	{
		if(where == 1)
		{
			transform.position.y -= 1;
			where = 0;
		}
		else if(where == 0)
		{
			transform.position.y -= 1;
			where = -1;
		}
	}
	if(Input.GetKey(KeyCode.RightArrow))
	{
		transform.position.x += 1;
	}
}
