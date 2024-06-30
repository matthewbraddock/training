package com.braddock.mtgbe.controller

import com.braddock.mtgbe.model.Card
import com.braddock.mtgbe.model.CardNameResponse
import com.braddock.mtgbe.model.CardResponse
import com.braddock.mtgbe.service.CardService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class CardController(private val cardService: CardService) {

    @GetMapping("/cards")
    fun getAllCards(): List<Card> = cardService.getAllCards()

    @GetMapping("/card")
    fun getCard(@RequestParam(required = false) id: Long?, @RequestParam(required = false) name: String?): ResponseEntity<Card> {
        if (id != null) {
            val card = cardService.getCardById(id)
            return if (card != null) ResponseEntity.ok(card) else ResponseEntity.notFound().build()
        } else if (name != null) {
            val card = cardService.getCardByName(name)
            return if (card != null) ResponseEntity.ok(card) else ResponseEntity.notFound().build()
        } else {
            return ResponseEntity.badRequest().build()
        }
    }

    @PostMapping("/card")
    fun createCard(@RequestBody card: Card): ResponseEntity<CardResponse> {
        return when (val response = cardService.createCard(card)) {
            is CardResponse.Success -> ResponseEntity.ok(response)
            is CardResponse.Error -> ResponseEntity.status(HttpStatus.CONFLICT).body(response)
        }
    }

    @PutMapping("/card")
    fun updateCard(@RequestBody(required = true) card: Card): ResponseEntity<Card> {
        val updatedCard = cardService.updateCard(card.name, card)
        return if (updatedCard != null) ResponseEntity.ok(updatedCard) else ResponseEntity.notFound().build()
    }

    @DeleteMapping("/card")
    fun deleteCard(@RequestParam(required = true) name: String): ResponseEntity<CardNameResponse> {
        return if (name.isBlank()) {
            ResponseEntity.badRequest().build()
        } else {
            when (val response = cardService.deleteCard(name)) {
                is CardNameResponse.Success -> ResponseEntity.ok(response)
                is CardNameResponse.Error -> ResponseEntity.notFound().build()
            }
        }
    }
}
