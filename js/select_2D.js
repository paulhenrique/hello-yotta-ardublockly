
// the document to load....in this case a simple JSON Object
var jsonDocument =
  [
    {
      "type": "draw2d.shape.basic.Image",
      "id": "ebfb35bb-5767-8155-c804-14bd48789dc21",
      "x": 0,
      "y": 0,
      "width": 150,
      "height": 150,
      "alpha": 1,
      "opaque": true,
      "selectable": false,
      "draggable": true,
      "angle": 0,
      "userData": {},
      "cssClass": "draw2d_shape_node_Between",
      "path": "img/components/COMPONENTE_BUTTON.png",
      "ports": [
        {
          "type": "draw2d.InputPort",
          "id": "33519910-0fcf-abe7-c740-4ea2d02533fc",
          "width": 10,
          "height": 10,
          "alpha": 1,
          "selectable": false,
          "draggable": true,
          "angle": 0,
          "userData": {},
          "cssClass": "draw2d_InputPort",
          "bgColor": "rgba(79,104,112,1)",
          "color": "rgba(27,27,27,1)",
          "stroke": 1,
          "dasharray": null,
          "maxFanOut": 1,
          "name": "input0",
          "semanticGroup": "global",
          "port": "draw2d.InputPort",
          "locator": "draw2d.layout.locator.InputPortLocator",
          "locatorAttr": {}
        }
      ],
      "bgColor": "rgba(77,144,254,1)",
      "color": "rgba(69,130,229,1)",
      "stroke": 1,
      "radius": 0,
      "dasharray": null
    },
  ];

/** Classe de construção das portas
* @author paulhenrique
*
*/
var Ports = {};

/** Constrói a visualização do canvas
 * @author paulhenrique
 * 
*/
Ports.init = function () {
  let map = [...this.generateComponents(), this.parentComponent()];
  this.mountInCanvas(map);
}

/**
 * Posicionamento Inicial dos componentes
 * @author paulhenrique
 */

Ports.startPosition = {
  x: 500,
  y: 0
};

/**
 * Posicionamento Inicial dos componentes
 * @author paulhenrique
 */

Ports.parentStartPosition = {
  x: 50,
  y: 100
};

/** Componente Pai, em que são conectadas as outras aplicações
 * @author paulhenrique
 *
*/
Ports.parentComponent = function () {
  let parent = {
    type: "draw2d.shape.basic.Image",
    id: "ebfb35bb-5767-8155-c804-14bd48789dc21",
    x: this.parentStartPosition.x,
    y: this.parentStartPosition.y,
    height: 750 / 3.4,
    width: 1472 / 3.4,
    alpha: 1,
    opaque: true,
    selectable: false,
    draggable: true,
    angle: 90,
    userData: {},
    cssClass: "draw2DparentNode",
    path: `${this.getComponentPath('Principal')}`,
    ports: [
    ],
    bgColor: "rgba(77,144,254,1)",
    color: "rgba(69,130,229,1)",
    stroke: 1,
    radius: 0,
    dasharray: null
  }

  for (var i = 0; i < 18; i++) {
    parent.ports.push({
      type: "draw2d.InputPort",
      id: `33519910-0fcf-abe7-c740-4ea2d02533fc${i}`,
      width: 20,
      height: 20,
      alpha: 1,
      selectable: false,
      draggable: true,
      angle: 0,
      userData: {},
      cssClass: "draw2DparentNodeInput",
      bgColor: "rgba(79,104,112,1)",
      color: "rgba(27,27,27,1)",
      stroke: 1,
      dasharray: null,
      maxFanOut: 1,
      left: 0,
      top: 0,
      name: "input0",
      semanticGroup: "global",
      port: "draw2d.OutputPort",
      locator: (i > 8) ? "draw2d.layout.locator.InputPortLocator" : "draw2d.layout.locator.OutputPortLocator",
      locatorAttr: {}
    });
  }
  return parent;
};

Ports.components = [];

/** Listagem de componentes disponiveis
* @author paulhenrique
*
*/
Ports.contentItems = [
  { name: 'Amarelo', port: null },
  { name: 'Button', port: null, },
  { name: 'Buzzer', port: null, },
  { name: 'LDR', port: null },
  { name: 'Potenciometro', port: null },
  { name: 'Temperatura', port: null },
  { name: 'Verde', port: null },
  { name: 'Vermelho', port: null },
  { name: 'Temperatura', port: null },
];

/** Padrão de plotagem e construção de cada elemento no canvas
* @author paulhenrique
*
*/
Ports.patternPlot = {
  type: "draw2d.shape.basic.Image",
  id: "ebfb35bb-5767-8155-c804-14bd48789dc21",
  x: 0,
  y: 0,
  width: 125,
  height: 125,
  alpha: 1,
  opaque: true,
  selectable: false,
  draggable: true,
  angle: 0,
  userData: {},
  cssClass: "draw2d_shape_node_Between",
  path: "img/components/COMPONENTE_BUTTON.png",
  ports: [
    {
      type: "draw2d.InputPort",
      id: "33519910-0fcf-abe7-c740-4ea2d02533fc",
      width: 10,
      height: 10,
      alpha: 1,
      selectable: false,
      draggable: true,
      angle: 0,
      userData: {},
      cssClass: "draw2d_InputPort",
      bgColor: "rgba(79,104,112,1)",
      color: "rgba(27,27,27,1)",
      stroke: 1,
      dasharray: null,
      maxFanOut: 1,
      name: "input0",
      semanticGroup: "global",
      port: "draw2d.InputPort",
      locator: "draw2d.layout.locator.InputPortLocator",
      locatorAttr: {}
    }
  ],
  bgColor: "rgba(77,144,254,1)",
  color: "rgba(69,130,229,1)",
  stroke: 1,
  radius: 0,
  dasharray: null
}

/** PlotMessage at Console
* @author paulhenrique
*
*/
Ports.showMessage = (msg) => {
  console.log(msg);
}

/** Construct Canvas
* @author paulhenrique
*
*/
Ports.mountInCanvas = (obj) => {
  var canvas = new draw2d.Canvas("gfx_holder");
  var reader = new draw2d.io.json.Reader();
  var createConnection = function () {
    var con = new draw2d.Connection();
    con.setRouter(new draw2d.layout.connection.ManhattanConnectionRouter());
    return con;
  };

  canvas.installEditPolicy(new draw2d.policy.connection.DragConnectionCreatePolicy({
    createConnection: createConnection
  }));

  reader.unmarshal(canvas, obj);
}

/** Ajusta posicionamento com base no tamanho dos elementos
* @author paulhenrique
*
*/
Ports.verifyPositions = function (b) {
  let passo = 150;
  let posX = 0;
  let posY = 0;

  if (b > 5) {
    posX = b - 6;
  } else if (b > 2) {
    posX = b - 3;
    posY = 1;
  } else {
    posX = b;
    posY = 2;
  }

  return {
    passo,
    posX,
    posY
  }
}

/** Retorna localização dos arquivos com base na pasta
* @author paulhenrique
* @param component: String (Nome do componente)
* @param connected: Bool (Nome do componente)
*/
Ports.getComponentPath = function (component = '', connected = false) {
  let str = `img/components/${component.toUpperCase()}`
  if (connected) {
    str += '_CONECTADO';
  }
  return `${str}.png`;
}

/**Gera os componentes para colocação no canvas
* @author paulhenrique
* @type Object
*/
Ports.generateComponents = function () {
  return this.contentItems.map((a, b) => {
    let {
      passo,
      posX,
      posY
    } = this.verifyPositions(b);

    return {
      ...this.patternPlot,
      cssClass: b > 6 ? "rotate180Deg" : "rotate0Deg",
      x: posX * passo + this.startPosition.x,
      y: posY * passo + this.startPosition.y,
      path: this.getComponentPath(a.name)
    };

  });
}


/** Inicia as instâncias na janela
* @author paulhenrique
*/
document.addEventListener("DOMContentLoaded", function () {
  Ports.init();
});
