import LearnItem from '../syllabus-content/items';
import React from 'react';
import { getNodeByIid } from 'common/Node';

import { syllabusContentWidth } from 'components/admin/credit.bu/common';

const createTreeNode = (node, onLearningItemSelected) => {
  node.title =
    <LearnItem level={node.level} onSelect={onLearningItemSelected} name={node.name} node={node} width={syllabusContentWidth} iconType="folder" />;
  return node;
};

/**
 * Call after drag and drop to restructure of the tree
 *
 * @param treeDataLevel
 * @param currentLevel
 * @param resultTree
 * @returns {*}
 */
export const resetTreeLevel = (treeDataLevel, onLearningItemSelected, currentLevel = 1, resultTree = []) => {
  if (!treeDataLevel || treeDataLevel.length === 0) {
    return treeDataLevel || [];
  }
  treeDataLevel.map((item) => {
    // item = {...item};
    if (item.level !== currentLevel) {
      item.level = currentLevel;
      item = createTreeNode(item, onLearningItemSelected);
    }

    item.children = resetTreeLevel(item.children, onLearningItemSelected, currentLevel + 1);
    resultTree.push(item);
  });

  return resultTree;
};

/**
 * add a node to the tree
 * @param treeData
 * @param node
 * @param parentNode
 * @returns {Array}
 */
export const addTreeNodeLevel = (treeData = [], node = {}, onLearningItemSelected, parentNode = undefined) => {
  if (!parentNode) {
    node.level = 1;
    node = createTreeNode(node, onLearningItemSelected);
    treeData.push(node);
    return treeData;
  }

  treeData.map((item) => {
    if (item.iid === parentNode.iid) {
      item.children = item.children || [];
      node.level = item.level + 1;
      node = createTreeNode(node, onLearningItemSelected);
      item.children.push(node);
    }
  });

  return treeData;
};

export const getTreeDataToStoreToServer = (treeData = []) => {
  const result = [];
  treeData.map((item) => {
    const dbItem = {
      iid: item.iid,
      _id: item._id || item.id,
    };

    if (item.children) {
      dbItem.children = getTreeDataToStoreToServer(item.children);
    }
    result.push(dbItem);
  });
  return result;
};

/**
 *
 * @param learningItems
 * @param ids
 * @returns {Object: {iid: id}}
 */
export const getLectureMaterialIdsAndIids = (learningItems = [], ids = {}) => {
  if (!learningItems || learningItems.length === 0) {
    return {};
  }

  learningItems.map((item) => {
    ids[item.iid] = item._id;
    if (item.children) {
      ids = { ...ids, ...getLectureMaterialIdsAndIids(item.children, ids) };
    }
  });
  return ids;
};

/**
 *
 * @param learningItemsStructure
 * @param learningMaterials
 */
export const buildTreeDataFromLearningMaterial = (learningItemsStructure = [], learningMaterials = [], onLearningItemSelected, level = 1) => {
  const result = [];
  learningItemsStructure.map((item) => {
    const learningMaterial = getNodeByIid(item.iid, learningMaterials);
    if (learningMaterial === null) return;
    if (item.children) {
      learningMaterial.children = buildTreeDataFromLearningMaterial(item.children, learningMaterials, level + 1);
    }
    learningMaterial.level = level;
    result.push(createTreeNode(learningMaterial, onLearningItemSelected));
  });
  return result;
};

/**
 *
 * @param learningItemsStructure
 * @param learningMaterials
 */
export const setTreeDataWithSelectedNode = (treeData = [], selectedIid) => {
  const result = [];
  treeData.map((item) => {
    item.selected = false;
    if (item.iid === selectedIid) {
      item.selected = true;
    }
    if (item.children) {
      item.children = setTreeDataWithSelectedNode(item.children, selectedIid);
    }
    result.push(item);
  });
  return result;
};
