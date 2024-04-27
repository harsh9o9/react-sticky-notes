# Sticky notes

## Description:
- The goal of this project is to create a preformant draggable hook in react.
- The hook should turn a element draggable.
- It should be reusable, should not cause unnecessary rerenders, etc.
- The hook should not store element position a state as position change will force lots of unnecessary rerenders.
- It should utilize requestAnimationFrame to render element before next paint.
- It should not attach unnecessary event handlers to elements and leave them be, it leads to issues when multiple elements use this hook.

NOTE: I have created this simple dummy notes website to showcase the hook. Its just a demo so not much in it.

## Attachments:
### UI:
<img width="1674" alt="react-sticky-notes-demo-pic" src="https://github.com/harsh9o9/react-sticky-notes/assets/90497185/27ab9029-3a66-46d5-99a5-551c996a757b">

### Behaviour:
https://github.com/harsh9o9/react-sticky-notes/assets/90497185/42f4eb9c-5afc-47bc-84ad-d0d9deaf3a3f

