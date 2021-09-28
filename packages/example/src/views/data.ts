const getValueSafety = {
  id: 'getValueSafety',
  text: 'getValueSafety'
};

const blobToJSON = {
  id: 'blobToJSON',
  text: 'blobToJSON'
};

const Transfrom = {
  id: 'Transfrom',
  text: 'Transfrom',
  children: [
    getValueSafety,
    blobToJSON
  ]
};

const checkEventTargetNodeBelong = {
  id: 'checkEventTargetNodeBelong',
  text: 'checkEventTargetNodeBelong'
};

const Dom = {
  id: 'Dom',
  text: 'Dom',
  children: [checkEventTargetNodeBelong]
};

export const treeData = [Transfrom, Dom];

