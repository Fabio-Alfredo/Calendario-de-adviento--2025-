/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true
        if (!t1 || !t2) return false

        if (t1.value !== t2.value) return false

        const leftMirror =
            (t1.left || null) && (t2.right || null)
                ? isMirror(t1.left, t2.right)
                : t1.left === t2.right

        const rightMirror =
            (t1.right || null) && (t2.left || null)
                ? isMirror(t1.right, t2.left)
                : t1.right === t2.left

        return leftMirror && rightMirror
    }

    return [isMirror(tree1, tree2), tree1.value]
}


const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2))
// [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree3))
// [false, '🎄']

const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree4))
// [false, '🎄']

console.log(isTreesSynchronized(
    { value: '🎅' },
    { value: '🧑‍🎄' }
))
// [false, '🎅']