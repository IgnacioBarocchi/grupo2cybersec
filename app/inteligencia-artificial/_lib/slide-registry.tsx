'use client'

import type { ComponentType } from 'react'
import type {
  ComparisonSlide,
  ConceptSlide,
  DataSlide,
  DeckSlide,
  ProcessSlide,
  SectionBreakSlide,
  SlideType,
} from './types'
import { DataRecipe } from '../_components/recipes/DataRecipe'
import { ConceptRecipe } from '../_components/recipes/ConceptRecipe'
import { ComparisonRecipe } from '../_components/recipes/ComparisonRecipe'
import { ProcessRecipe } from '../_components/recipes/ProcessRecipe'
import { SectionBreakRecipe } from '../_components/recipes/SectionBreakRecipe'

type RecipeProps = { slide: DeckSlide }

export const slideRecipeMap: Record<SlideType, ComponentType<RecipeProps>> = {
  data: ({ slide }) => <DataRecipe slide={slide as DataSlide} />,
  concept: ({ slide }) => <ConceptRecipe slide={slide as ConceptSlide} />,
  comparison: ({ slide }) => <ComparisonRecipe slide={slide as ComparisonSlide} />,
  process: ({ slide }) => <ProcessRecipe slide={slide as ProcessSlide} />,
  'section-break': ({ slide }) => <SectionBreakRecipe slide={slide as SectionBreakSlide} />,
}

export function isKnownSlideType(type: string): type is SlideType {
  return type in slideRecipeMap
}
