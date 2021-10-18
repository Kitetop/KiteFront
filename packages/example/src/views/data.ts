/** Transform.ts */
const getValueSafety = {
  id: 'getValueSafety',
  text: 'getValueSafety',
  slots: {
    switcherIcon: 'api'
  }
};

const blobToJSON = {
  id: 'blobToJSON',
  text: 'blobToJSON',
  slots: {
    switcherIcon: 'api'
  }
};

const Transfrom = {
  id: 'Transfrom',
  text: 'Transfrom',
  children: [
    getValueSafety,
    blobToJSON
  ]
};
/** tree.ts */
const getAllParentNodeList = {
  id: 'getAllParentNodeList',
  text: 'getAllParentNodeList',
  slots: {
    switcherIcon: 'api'
  }
};

const filterTreeRouter = {
  id: 'filterTreeRouter',
  text: 'filterTreeRouter',
  slots: {
    switcherIcon: 'api'
  }
};

const findTreeNode = {
  id: 'findTreeNode',
  text: 'findTreeNode',
  slots: {
    switcherIcon: 'api'
  }
};

const Tree = {
  id: 'Tree',
  text: 'Tree',
  children: [
    getAllParentNodeList,
    filterTreeRouter,
    findTreeNode
  ]
};
/** validators.ts */
const getType = {
  id: 'getType',
  text: 'getType',
  slots: {
    switcherIcon: 'api'
  }
};

const isType = {
  id: 'isType',
  text: 'isType',
  slots: {
    switcherIcon: 'api'
  }
};

const isNumber = {
  id: 'isNumber',
  text: 'isNumber',
  slots: {
    switcherIcon: 'api'
  }
};

const Validators = {
  id: 'Validators',
  text: 'Validators',
  children: [
    getType,
    isType,
    isNumber
  ]
};

const checkEventTargetNodeBelong = {
  id: 'checkEventTargetNodeBelong',
  text: 'checkEventTargetNodeBelong',
  slots: {
    switcherIcon: 'api'
  }
};

const Dom = {
  id: 'Dom',
  text: 'Dom',
  children: [checkEventTargetNodeBelong]
};

const treeData = [Transfrom, Tree, Validators, Dom];
export default treeData;
