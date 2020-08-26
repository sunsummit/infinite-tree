/* eslint import/prefer-default-export: 0  */
/* eslint no-nested-ternary: 0 */
import classNames from 'classnames';
import escapeHTML from 'escape-html';
import tag from 'html5-tag';

const defaultRowRenderer = (node, treeOptions) => {
    const { id, name, loadOnDemand = false, children, state, icon = '' } = node;
    const droppable = treeOptions.droppable;
    const { depth, open, path, total, selected = false, filtered } = state;
    const childrenLength = Object.keys(children).length;
    const more = node.hasChildren();
    const iconUrl = treeOptions.iconUrl;
    const indentUnit = 18;

    if (filtered === false) {
        return '';
    }

    const toggler = tag('span', {
        'class': (() => {
            if (!more && loadOnDemand) {
                return classNames(treeOptions.togglerClass, 'infinite-tree-closed');
            }
            if (more && open) {
                return classNames(treeOptions.togglerClass);
            }
            if (more && !open) {
                return classNames(treeOptions.togglerClass, 'infinite-tree-closed');
            }
            return '';
        })()
    }, '');

    let iconsrc = (!iconUrl) ? ((icon) ? `/images/${icon}.png` : undefined) : iconUrl(icon);
    let iconimg = '';
    if (iconsrc) {
        iconimg = tag('img', {
            'class': 'infinite-tree-item-icon',
            'style': 'margin-right: 6px;',
            'src': iconsrc
        });
    }
    const title = tag('span', {
        'class': classNames('infinite-tree-title')
    }, escapeHTML(name));
    const treeNode = tag('div', {
        'class': 'infinite-tree-node',
        'style': `margin-left: ${depth * indentUnit}px`
    }, toggler + iconimg + title);

    return tag('div', {
        'data-id': id,
        'data-expanded': more && open,
        'data-depth': depth,
        'data-path': path,
        'data-selected': selected,
        'data-children': childrenLength,
        'data-total': total,
        'class': classNames(
            'infinite-tree-item',
            { 'infinite-tree-selected': selected }
        ),
        'droppable': droppable
    }, treeNode);
};

export {
    defaultRowRenderer
};
