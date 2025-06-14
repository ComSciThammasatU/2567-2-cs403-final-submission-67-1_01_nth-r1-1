import React from "react";
import "../../components/codeBox.css";
import "../sublessondefault.css";
const Transition: React.FC = () => {


  return (
    <div>
      <h1 className="topic">Using CSS transitions</h1>
      <p className="content">
        CSS transitions provide a way to control animation speed when changing
        CSS properties. Instead of having property changes take effect
        immediately, you can cause the changes in a property to take place over
        a period of time. For example, if you change the color of an element
        from white to black, usually the change is instantaneous. With CSS
        transitions enabled, changes occur at time intervals that follow an
        acceleration curve, all of which can be customized. Animations that
        involve transitioning between two states are often called implicit
        transitions as the states in between the start and final states are
        implicitly defined by the browser.
      </p>
      <p className="content" style={{ marginTop: "2%" }}>
        CSS transitions let you decide which properties to animate (by listing
        them explicitly), when the animation will start (by setting a delay),
        how long the transition will last (by setting a duration), and how the
        transition will run (by defining an easing function, e.g., linearly or
        quick at the beginning, slow at the end).
      </p>
      <h1 className="header">Which CSS properties can be transitioned?</h1>
      <p className="content">
        The Web author can define which property has to be animated and in which
        way. This allows the creation of complex transitions. However, some
        properties are not animatable as it doesn't make sense to animate them.
      </p>
      <h1 className="header">Defining transitions</h1>
      <p className="content">
        CSS Transitions are controlled using the shorthand transition property.
        This is the best way to configure transitions, as it makes it easier to
        avoid out of sync parameters, which can be very frustrating to have to
        spend lots of time debugging in CSS. You can control the individual
        components of the transition with the following sub-properties:
        transition-property Specifies the name or names of the CSS properties to
        which transitions should be applied. Only properties listed here are
        animated during transitions; changes to all other properties occur
        instantaneously as usual. transition-duration Specifies the duration
        over which transitions should occur. You can specify a single duration
        that applies to all properties during the transition, or multiple values
        to allow each property to transition over a different period of time.
        transition-timing-function Specifies a function to define how
        intermediate values for properties are computed. Easing functions
        determine how intermediate values of the transition are calculated. Most
        easing functions can be specified by providing the graph of the
        corresponding function, as defined by four points defining a cubic
        bezier. You can also choose easing from Easing functions cheat sheet.
        transition-delay Defines how long to wait between the time a property is
        changed and the transition actually begins. The transition shorthand CSS
        syntax is written as follows:
      </p>
      <pre>
        <code>
          div {"transition: <property> <duration> <timing-function> <delay>;"}
        </code>
      </pre>
      <h1 className="header">Examples</h1>
      <p className="content">
        Basic example This example performs a four-second font size transition
        with a two-second delay between the time the user mouses over the
        element and the beginning of the animation effect:
      </p>
      <pre>
        <code>
          css
          {`#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
 transition-delay: 2s;
}`}
          {`#delay:hover {
  font-size: 36px;
}`}
        </code>
      </pre>
      <h1 className="header">Multiple animated properties example</h1>
      <pre>
        <code>
          {`CSS
css

play
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
}



.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: 180deg;
}`}
        </code>
      </pre>
      <h1 className="header">
        When property value lists are of different lengths
      </h1>
      <p className="content">
        If any property's list of values is shorter than the others, its values
        are repeated to make them match. For example:
      </p>
      <pre>
        <code>
          {`css

div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}`}
        </code>
      </pre>
      <p className="content">This is treated as if it were:</p>
      <pre>
        <code>
          {`css

div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}`}
        </code>
      </pre>
      <p className="content">
        Similarly, if any property's value list is longer than that for
        transition-property, it's truncated, so if you have the following CSS:
      </p>
      <pre>
        <code>
          {`css

div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}`}
        </code>
      </pre>
      <p className="content">This gets interpreted as:</p>
      <pre>
        <code>
          {`css

div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}`}
        </code>
      </pre>
      <h1 className="header">JavaScript examples</h1>
      <p className="content">
        Note: Care should be taken when using a transition immediately after:
        adding the element to the DOM using .appendChild() removing an element's
        display: none; property. This is treated as if the initial state had
        never occurred and the element was always in its final state. The easy
        way to overcome this limitation is to apply a setTimeout() of a handful
        of milliseconds before changing the CSS property you intend to
        transition to.
      </p>
      <h1 className="header">
        Using transitions to make JavaScript functionality smooth
      </h1>
      <p className="content">
        Transitions are a great tool to make things look much smoother without
        having to do anything to your JavaScript functionality. Take the
        following example.
      </p>
      <pre>
        <code>
          {`html

play
<p className="content">Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>

<script>
  // Make the ball move to a certain position:
  const f = document.getElementById("foo");
  document.addEventListener(
    "click",
    (ev) => {
      f.style.transform = \`translateY(\${ev.clientY - 25}px)\`;
      f.style.transform += \`translateX(\${ev.clientX - 25}px)\`;
    },
    false,
  );
</script>`}
        </code>
      </pre>
      <p className="content">
        With CSS, you can smooth the styles applied through JavaScript. Add a
        transition to the element and any change will happen smoothly:
      </p>
      <pre>
        <code>
          {`css

play
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}`}
        </code>
      </pre>
      <h1 className="header">
        Detecting the start and completion of a transition
      </h1>
      <p className="content">
        You can use the transitionend event to detect that an animation has
        finished running. This is a TransitionEvent object, which has two added
        properties beyond a typical Event object: propertyName A string
        indicating the name of the CSS property whose transition completed.
        elapsedTime A float indicating the number of seconds the transition had
        been running at the time the event fired. This value isn't affected by
        the value of transition-delay. As usual, you can use the
        addEventListener() method to monitor for this event:
      </p>
      <pre>
        <code>
          {`js
Copy to Clipboard
el.addEventListener("transitionend", updateTransition, true);`}
        </code>
      </pre>
      <p className="content">
        You detect the beginning of a transition using transitionrun (fires
        before any delay) and transitionstart (fires after any delay), in the
        same kind of fashion:
      </p>
      <pre>
        <code>
          {`js
Copy to Clipboard
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);`}
        </code>
      </pre>
      <p className="content">
        Note: The transitionend event doesn't fire if the transition is aborted
        before the transition is completed because either the element is made
        display: none or the animating property's value is changed.
      </p>
    </div>
  );
};

export default Transition;
